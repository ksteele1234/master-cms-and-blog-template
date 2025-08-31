import type { Handler } from '@netlify/functions';

export const handler: Handler = async (event) => {
  try {
    const { path, method = 'GET', body, token } = JSON.parse(event.body ?? '{}');

    if (!token) return { statusCode: 401, body: 'Missing token' };
    if (!path)  return { statusCode: 400, body: 'Missing path'  };

    const res = await fetch(`https://api.github.com/${path}`, {
      method,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
        'Content-Type': 'application/json',
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    const text = await res.text();
    return { statusCode: res.status, body: text };
  } catch (err: any) {
    return { statusCode: 500, body: err?.message ?? 'Proxy error' };
  }
};