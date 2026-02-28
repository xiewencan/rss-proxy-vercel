export default async function handler(request) {
  const url = new URL(request.url);
  const targetUrl = url.searchParams.get('url');

  if (!targetUrl) {
    return new Response('Usage: ?url=https://example.com', { status: 400 });
  }

  const finalUrl = targetUrl.startsWith('http') ? targetUrl : 'https://' + targetUrl;

  try {
    const response = await fetch(finalUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; RSS-Proxy/1.0)'
      }
    });

    const headers = new Headers(response.headers);
    headers.set('Access-Control-Allow-Origin', '*');

    return new Response(response.body, {
      status: response.status,
      headers
    });
  } catch (error) {
    return new Response(`Error: ${error.message}`, { status: 500 });
  }
}

export const config = {
  runtime: 'edge',
};
