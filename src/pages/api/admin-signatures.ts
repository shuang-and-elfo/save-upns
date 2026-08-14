import type { APIRoute } from 'astro';
import { getAllSignatures } from '../../lib/signatures';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'saveUPNS2026!';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { password } = body;

    if (password !== ADMIN_PASSWORD) {
      return new Response(JSON.stringify({ success: false, error: 'Invalid password' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const signatures = getAllSignatures();
    return new Response(JSON.stringify({ success: true, signatures }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ success: false, error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
