const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export async function sendMessage(message: string) {
  const res = await fetch(`${BASE_URL}/chatbot`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });
  return res.json();
}

export async function getCoverage(area: string) {
  const res = await fetch(`${BASE_URL}/coverage?area=${area}`);
  return res.json();
}

export async function getDeals() {
  const res = await fetch(`${BASE_URL}/deals`);
  return res.json();
}
