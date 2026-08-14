import type { APIRoute } from 'astro';

// In-memory cache for 60 seconds
let cachedCount: number | null = null;
let lastFetched = 0;
const CACHE_TTL_MS = 60 * 1000;

export const GET: APIRoute = async () => {
  const apiKey = process.env.ACTION_NETWORK_API_KEY;
  const petitionId = process.env.ACTION_NETWORK_PETITION_ID;

  // Return cached result if still valid
  const now = Date.now();
  if (cachedCount !== null && now - lastFetched < CACHE_TTL_MS) {
    return new Response(
      JSON.stringify({ total_signatures: cachedCount, cached: true }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=30, stale-while-revalidate=60',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }

  // If credentials are not provided, return null (client will gracefully hide count)
  if (!apiKey || !petitionId) {
    return new Response(
      JSON.stringify({
        total_signatures: null,
        message: 'Action Network credentials not configured',
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }

  try {
    const url = petitionId.startsWith('http')
      ? petitionId
      : `https://actionnetwork.org/api/v2/petitions/${petitionId}`;

    const res = await fetch(url, {
      headers: {
        'OSDI-API-Token': apiKey,
        'Accept': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error(`Action Network responded with status ${res.status}`);
    }

    const data = await res.json();
    const count = data.total_signatures ?? data.total_submissions ?? null;

    if (typeof count === 'number') {
      cachedCount = count;
      lastFetched = now;
    }

    return new Response(
      JSON.stringify({ total_signatures: count }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=30, stale-while-revalidate=60',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  } catch (error) {
    console.error('Error fetching Action Network signature count:', error);
    return new Response(
      JSON.stringify({
        total_signatures: cachedCount,
        error: 'Failed to fetch signature count',
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }
};
