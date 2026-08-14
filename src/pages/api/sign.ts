import type { APIRoute } from 'astro';
import { addSignature } from '../../lib/signatures';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const {
      first_name,
      last_name,
      email,
      zip_code,
      relationship_upns,
      ucla_affiliation,
      comments,
      display_publicly,
      hp_field, // honeypot
    } = data;

    // 1. Bot check via honeypot
    if (hp_field) {
      return new Response(JSON.stringify({ success: true, bot: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // 2. Field validation
    if (!first_name || !last_name || !email || !zip_code || !relationship_upns || !ucla_affiliation) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Please fill in all required fields.',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 3. Email format validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Please enter a valid email address.',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 4. Securely add signature to local database and forward to Google Sheet
    const result = await addSignature({
      first_name,
      last_name,
      email,
      zip_code,
      relationship_upns,
      ucla_affiliation,
      comments,
      display_publicly: display_publicly !== false,
    });

    return new Response(
      JSON.stringify({
        success: true,
        isNew: result.isNew,
        total_signatures: result.totalCount,
        message: 'Signature recorded successfully!',
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error: any) {
    console.error('Signature submission error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || 'Failed to submit signature.',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
