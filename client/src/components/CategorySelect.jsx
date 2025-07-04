export default function CategorySelect({ categories, value, onChange }) {
  return (
    <select
      className="input input-bordered w-full text-lg rounded-lg px-6 py-3 border border-gray-300 focus:ring-4 focus:ring-blue-200 focus:border-blue-400 bg-white hover:border-blue-400 transition shadow min-w-0 break-words"
      style={{ minWidth: 0, maxWidth: "100%" }}
      value={value || ""}
      onChange={(e) => onChange(e.target.value)}
      required
    >
      <option value="" disabled>
        Pick a category
      </option>
      {categories.map((cat) => (
        <option key={cat._id} value={cat._id}>
          {cat.name}
        </option>
      ))}
    </select>
  );
}
