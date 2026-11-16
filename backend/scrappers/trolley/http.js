const BASE = "https://www.trolley.co.uk";
const DELAY_MS = Number(process.env.TROLLEY_DELAY_MS ?? 1000);

let last = 0;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Sequential, rate-limited GET. One request per DELAY_MS across the process.
export async function get(path, retries = 3) {
  const url = path.startsWith("http") ? path : BASE + path;
  for (let attempt = 1; attempt <= retries; attempt++) {
    const wait = last + DELAY_MS - Date.now();
    if (wait > 0) await sleep(wait);
    last = Date.now();
    try {
      const res = await fetch(url, {
        headers: { "User-Agent": "Mozilla/5.0 (PriceHuntBot)" },
        redirect: "follow",
      });
      if (res.status === 404) return null;
      if (res.ok) return await res.text();
      if (res.status !== 429 && res.status < 500) return null;
    } catch {
      // network error, retry
    }
    await sleep(2000 * attempt);
  }
  return null;
}

export { BASE };
