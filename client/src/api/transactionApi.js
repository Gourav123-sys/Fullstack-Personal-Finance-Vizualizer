const BASE_URL =
  import.meta.env.VITE_API_URL ||
  "https://fullstack-personal-finance-vizualizer.onrender.com";
const API_URL = `${BASE_URL}/api/transactions`;

export async function getTransactions() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Failed to fetch transactions");
  return res.json();
}

export async function addTransaction(data) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to add transaction");
  return res.json();
}

export async function updateTransaction(id, data) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to update transaction");
  return res.json();
}

export async function deleteTransaction(id) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete transaction");
  return res.json();
}
