import type { APIRoute } from 'astro';
import { exportSignaturesAsCSV } from '../../lib/signatures';

export const GET: APIRoute = async () => {
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
