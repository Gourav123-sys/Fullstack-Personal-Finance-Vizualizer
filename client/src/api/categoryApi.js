const API_URL = "http://localhost:5000/api/categories";

export async function getCategories() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
}

export async function addCategory(data) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to add category");
  return res.json();
}

export async function deleteCategory(id) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete category");
  return res.json();
}
