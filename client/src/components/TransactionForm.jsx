import { useState, useEffect } from "react";
import CategorySelect from "./CategorySelect";
import { getCategories } from "../api/categoryApi";

export default function TransactionForm({
  onSubmit,
  initialData = {},
  submitLabel = "Add Transaction",
}) {
  const [amount, setAmount] = useState(initialData.amount || "");
  const [date, setDate] = useState(
    initialData.date ? initialData.date.slice(0, 10) : ""
  );
  const [description, setDescription] = useState(initialData.description || "");
  const [category, setCategory] = useState(initialData.category?._id || "");
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getCategories()
      .then(setCategories)
      .catch(() => setCategories([]));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !date || !description || !category) {
      setError("All fields are required!");
      return;
    }
    setError("");
    onSubmit({ amount: Number(amount), date, description, category });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto space-y-5 p-8 bg-white rounded-lg shadow border border-gray-200 flex flex-col"
    >
      <h2 className="text-2xl font-extrabold text-blue-700 mb-4 flex items-center gap-2 justify-center">
        {submitLabel}
      </h2>
      {error && (
        <div className="text-red-500 text-center font-bold">{error}</div>
      )}
      <div>
        <label className="block mb-2 font-bold text-lg text-gray-700">
          Amount
        </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="input input-bordered w-full text-lg rounded-lg px-6 py-3 border border-gray-300 focus:ring-4 focus:ring-blue-200 focus:border-blue-400 bg-white placeholder-gray-400"
          placeholder="e.g. 1000"
        />
      </div>
      <div>
        <label className="block mb-2 font-bold text-lg text-gray-700">
          Date
        </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="input input-bordered w-full text-lg rounded-lg px-6 py-3 border border-gray-300 focus:ring-4 focus:ring-blue-200 focus:border-blue-400 bg-white placeholder-gray-400"
          placeholder="Pick a date"
        />
      </div>
      <div>
        <label className="block mb-2 font-bold text-lg text-gray-700">
          Description
        </label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="input input-bordered w-full text-lg rounded-lg px-6 py-3 border border-gray-300 focus:ring-4 focus:ring-blue-200 focus:border-blue-400 bg-white placeholder-gray-400"
          placeholder="e.g. Candy, Toys, Rent..."
        />
      </div>
      <div>
        <label className="block mb-2 font-bold text-lg text-gray-700">
          Category
        </label>
        <CategorySelect
          categories={categories}
          value={category}
          onChange={setCategory}
        />
      </div>
      <button
        type="submit"
        className="w-full py-3 mt-2 rounded-lg bg-blue-600 text-white text-xl font-bold shadow hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
      >
        {submitLabel}
      </button>
    </form>
  );
}
