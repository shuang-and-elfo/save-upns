import type { APIRoute } from 'astro';
import { getPublicStories } from '../../lib/signatures';

export const prerender = false;

export const GET: APIRoute = async () => {
  try {
    const stories = getPublicStories();
    return new Response(JSON.stringify({ stories }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error: any) {
    console.error('Error fetching stories:', error);
    return new Response(JSON.stringify({ stories: [], error: error.message }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
