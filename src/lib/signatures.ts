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
}

const DATA_DIR = path.join(process.cwd(), 'data');
const JSONL_FILE = path.join(DATA_DIR, 'signatures.jsonl');
const CSV_FILE = path.join(DATA_DIR, 'signatures.csv');

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

export function getAllSignatures(): Signature[] {
  ensureDataDir();
  if (!fs.existsSync(JSONL_FILE)) {
    return [];
  }

  try {
    const content = fs.readFileSync(JSONL_FILE, 'utf-8');
    const lines = content.split('\n').filter((l) => l.trim().length > 0);
    return lines.map((l) => JSON.parse(l));
  } catch (err) {
    console.error('Error reading signatures:', err);
    return [];
  }
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
  };

  if (!alreadySigned) {
    // 1. Append to JSONL
    fs.appendFileSync(JSONL_FILE, JSON.stringify(record) + '\n', 'utf-8');

    // 2. Append to CSV
    const csvExists = fs.existsSync(CSV_FILE);
    if (!csvExists) {
      fs.writeFileSync(
        CSV_FILE,
        '"Timestamp","First Name","Last Name","Email","ZIP Code","Relationship to UPNS","UCLA Affiliation","Comments"\n',
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
    ].join(',') + '\n';
    fs.appendFileSync(CSV_FILE, csvLine, 'utf-8');

    // 3. Forward to Google Sheets Webhook if configured
    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(record),
        }).catch((err) => console.error('Webhook async dispatch error:', err));
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
  return '"Timestamp","First Name","Last Name","Email","ZIP Code","Relationship to UPNS","UCLA Affiliation","Comments"\n';
}
