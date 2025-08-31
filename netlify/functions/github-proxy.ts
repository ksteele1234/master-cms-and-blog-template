// netlify/functions/github-proxy.ts
export const handler = async (event: any) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { url, method = "GET", headers = {}, body } = JSON.parse(event.body || "{}");

    // Only allow GitHub API
    if (!url || !url.startsWith("https://api.github.com/")) {
      return { statusCode: 400, body: "Invalid or missing GitHub API url" };
    }

    // Compose headers (token can come from client or Netlify env)
    const auth =
      headers.Authorization ||
      (process.env.GITHUB_TOKEN ? `Bearer ${process.env.GITHUB_TOKEN}` : undefined);

    const res = await fetch(url, {
      method,
      headers: {
        "content-type": "application/json",
        "user-agent": "netlify-github-proxy",
        ...(auth ? { Authorization: auth } : {}),
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    const text = await res.text();
    // Pass through status & content-type
    return {
      statusCode: res.status,
      headers: { "content-type": res.headers.get("content-type") || "application/json" },
      body: text,
    };
  } catch (err: any) {
    return { statusCode: 500, body: `github-proxy error: ${err?.message || err}` };
  }
};