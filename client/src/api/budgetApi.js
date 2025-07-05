const BASE_URL =
  import.meta.env.VITE_API_URL ||
  "https://fullstack-personal-finance-vizualizer.onrender.com";
const API_URL = `${BASE_URL}/api/budgets`;

export async function getBudgets(month) {
  const url = month ? `${API_URL}?month=${month}` : API_URL;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch budgets");
  return res.json();
}

export async function setBudget(data) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to set budget");
  return res.json();
}
