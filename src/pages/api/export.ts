import type { APIRoute } from 'astro';
import { exportSignaturesAsCSV } from '../../lib/signatures';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'saveUPNS2026!';

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const passParam = url.searchParams.get('pass') || url.searchParams.get('password') || url.searchParams.get('key');
  const authHeader = request.headers.get('authorization');
  const bearerToken = authHeader?.startsWith('Bearer ') ? authHeader.slice(7) : null;

  if (passParam !== ADMIN_PASSWORD && bearerToken !== ADMIN_PASSWORD) {
    return new Response(JSON.stringify({ error: 'Unauthorized. Incorrect password.' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const csv = exportSignaturesAsCSV();
  const filename = `save-upns-signatures-${new Date().toISOString().slice(0, 10)}.csv`;

  return new Response(csv, {
    status: 200,
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="${filename}"`,
      'Cache-Control': 'no-cache',
    },
  });
};
