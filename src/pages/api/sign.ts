import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const {
      first_name,
      last_name,
      email,
      zip_code,
      relationship,
      comments,
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
    if (!first_name || !last_name || !email || !zip_code || !relationship) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Please fill in all required fields.',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const apiKey = process.env.ACTION_NETWORK_API_KEY;
    const petitionId =
      process.env.ACTION_NETWORK_PETITION_ID ||
      'petition-to-preserve-university-parents-nursery-school-upns-2';

    // 3. If API key is not configured, record in local demo mode
    if (!apiKey) {
      console.log('Action Network API Key not set. Recorded demo signature:', {
        first_name,
        last_name,
        email,
        zip_code,
        relationship,
        comments,
      });
      return new Response(
        JSON.stringify({
          success: true,
          mode: 'demo',
          message: 'Signature received (demo mode). Set ACTION_NETWORK_API_KEY to sync live.',
        }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 4. Send to Action Network REST API
    const url = petitionId.startsWith('http')
      ? `${petitionId}/signatures`
      : `https://actionnetwork.org/api/v2/petitions/${petitionId}/signatures`;

    const payload = {
      person: {
        given_name: first_name,
        family_name: last_name,
        email_addresses: [{ address: email }],
        postal_addresses: [{ postal_code: zip_code }],
        custom_fields: {
          relationship: relationship,
          comments: comments || '',
        },
      },
      comments: comments || '',
    };

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'OSDI-API-Token': apiKey,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error('Action Network error response:', res.status, errText);
      throw new Error(`Action Network responded with status ${res.status}`);
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Signature recorded on Action Network' }),
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
