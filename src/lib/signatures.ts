import fs from 'node:fs';
import path from 'node:path';

export interface Signature {
  id: string;
  timestamp: string;
  first_name: string;
  last_name: string;
  email: string;
  zip_code: string;
  relationship_upns: string;
  ucla_affiliation: string;
  comments: string;
  display_publicly?: boolean;
}

export interface PublicStory {
  id: string;
  author: string;
  relationship_upns: string;
  ucla_affiliation: string;
  comments: string;
  timestamp: string;
}

// In serverless environments (e.g. Vercel / AWS Lambda), the deployment root is read-only.
// We write dynamic files to /tmp/save-upns-data and read bundled files from repo data/.
const IS_SERVERLESS = Boolean(process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME);
const DATA_DIR = IS_SERVERLESS ? path.join('/tmp', 'save-upns-data') : path.join(process.cwd(), 'data');
const READONLY_DATA_DIR = path.join(process.cwd(), 'data');

const JSONL_FILE = path.join(DATA_DIR, 'signatures.jsonl');
const CSV_FILE = path.join(DATA_DIR, 'signatures.csv');

function ensureDataDir() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
  } catch (err) {
    console.warn('Could not create data dir:', err);
  }
}

export function getAllSignatures(): Signature[] {
  ensureDataDir();
  const recordsMap = new Map<string, Signature>();

  // 1. Read from bundled repo data if present
  const readonlyJsonl = path.join(READONLY_DATA_DIR, 'signatures.jsonl');
  if (fs.existsSync(readonlyJsonl)) {
    try {
      const content = fs.readFileSync(readonlyJsonl, 'utf-8');
      const lines = content.split('\n').filter((l) => l.trim().length > 0);
      lines.forEach((l) => {
        try {
          const item = JSON.parse(l);
          if (item && item.email) recordsMap.set(item.email.toLowerCase(), item);
        } catch {}
      });
    } catch (err) {
      console.warn('Error reading bundled signatures:', err);
    }
  }

  // 2. Read from writable dir (/tmp in Vercel)
  if (fs.existsSync(JSONL_FILE) && JSONL_FILE !== readonlyJsonl) {
    try {
      const content = fs.readFileSync(JSONL_FILE, 'utf-8');
      const lines = content.split('\n').filter((l) => l.trim().length > 0);
      lines.forEach((l) => {
        try {
          const item = JSON.parse(l);
          if (item && item.email) recordsMap.set(item.email.toLowerCase(), item);
        } catch {}
      });
    } catch (err) {
      console.warn('Error reading tmp signatures:', err);
    }
  }

  return Array.from(recordsMap.values());
}

export function getPublicStories(): PublicStory[] {
  const signatures = getAllSignatures();
  const publicStories: PublicStory[] = signatures
    .filter((s) => s.comments && s.comments.trim().length > 0 && s.display_publicly !== false)
    .map((s) => {
      const lastInitial = s.last_name ? `${s.last_name.trim()[0].toUpperCase()}.` : '';
      const author = `${s.first_name.trim()} ${lastInitial}`.trim();
      return {
        id: s.id,
        author,
        relationship_upns: s.relationship_upns,
        ucla_affiliation: s.ucla_affiliation,
        comments: s.comments,
        timestamp: s.timestamp,
      };
    })
    .reverse(); // newest first

  return publicStories;
}

export function getSignatureCount(): number {
  const signatures = getAllSignatures();
  const baseCount = parseInt(process.env.INITIAL_SIGNATURE_COUNT || '0', 10) || 0;
  return signatures.length + baseCount;
}

export async function addSignature(data: {
  first_name: string;
  last_name: string;
  email: string;
  zip_code: string;
  relationship_upns: string;
  ucla_affiliation: string;
  comments?: string;
  display_publicly?: boolean;
}): Promise<{ success: boolean; isNew: boolean; totalCount: number }> {
  ensureDataDir();

  const emailNorm = data.email.trim().toLowerCase();
  const existing = getAllSignatures();
  
  // Check if email already signed
  const alreadySigned = existing.some((s) => s.email.trim().toLowerCase() === emailNorm);

  const record: Signature = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    timestamp: new Date().toISOString(),
    first_name: data.first_name.trim(),
    last_name: data.last_name.trim(),
    email: emailNorm,
    zip_code: data.zip_code.trim(),
    relationship_upns: data.relationship_upns.trim(),
    ucla_affiliation: data.ucla_affiliation.trim(),
    comments: (data.comments || '').trim(),
    display_publicly: data.display_publicly !== false,
  };

  if (!alreadySigned) {
    try {
      // 1. Append to JSONL in writable directory
      fs.appendFileSync(JSONL_FILE, JSON.stringify(record) + '\n', 'utf-8');

      // 2. Append to CSV in writable directory
      const csvExists = fs.existsSync(CSV_FILE);
      if (!csvExists) {
        fs.writeFileSync(
          CSV_FILE,
          '"Timestamp","First Name","Last Name","Email","ZIP Code","Relationship to UPNS","UCLA Affiliation","Comments","Display Publicly"\n',
          'utf-8'
        );
      }
      const escapeCsv = (str: string) => `"${(str || '').replace(/"/g, '""')}"`;
      const csvLine = [
        escapeCsv(record.timestamp),
        escapeCsv(record.first_name),
        escapeCsv(record.last_name),
        escapeCsv(record.email),
        escapeCsv(record.zip_code),
        escapeCsv(record.relationship_upns),
        escapeCsv(record.ucla_affiliation),
        escapeCsv(record.comments),
        escapeCsv(record.display_publicly ? 'Yes' : 'No'),
      ].join(',') + '\n';
      fs.appendFileSync(CSV_FILE, csvLine, 'utf-8');
    } catch (fsErr) {
      console.warn('Local filesystem write warning (handled for serverless):', fsErr);
    }

    // 3. Forward to Google Sheets Webhook if configured
    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(record),
        });
      } catch (err) {
        console.error('Webhook error:', err);
      }
    }
  }

  const totalCount = getSignatureCount();
  return {
    success: true,
    isNew: !alreadySigned,
    totalCount,
  };
}

export function exportSignaturesAsCSV(): string {
  ensureDataDir();
  if (fs.existsSync(CSV_FILE)) {
    return fs.readFileSync(CSV_FILE, 'utf-8');
  }
  const readonlyCsv = path.join(READONLY_DATA_DIR, 'signatures.csv');
  if (fs.existsSync(readonlyCsv)) {
    return fs.readFileSync(readonlyCsv, 'utf-8');
  }
  return '"Timestamp","First Name","Last Name","Email","ZIP Code","Relationship to UPNS","UCLA Affiliation","Comments","Display Publicly"\n';
}
