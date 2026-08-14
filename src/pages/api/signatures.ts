import type { APIRoute } from 'astro';
import { getSignatureCount } from '../../lib/signatures';

export const prerender = false;

export const GET: APIRoute = async () => {
  try {
    const count = getSignatureCount();
    return new Response(
      JSON.stringify({ total_signatures: count }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  } catch (error: any) {
    console.error('Error getting signatures count:', error);
    return new Response(
      JSON.stringify({ total_signatures: 0, error: error.message }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
