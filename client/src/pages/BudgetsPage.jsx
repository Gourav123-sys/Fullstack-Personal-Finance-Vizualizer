import { useEffect, useState } from "react";
import BudgetForm from "../components/BudgetForm";
import BudgetVsActualChart from "../components/BudgetVsActualChart";
import SpendingInsights from "../components/SpendingInsights";
import { getCategories } from "../api/categoryApi";
import { getBudgets, setBudget } from "../api/budgetApi";
import { getTransactions } from "../api/transactionApi";
import toast from "react-hot-toast";

function getCurrentMonth() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
}

export default function BudgetsPage() {
  const [categories, setCategories] = useState([]);
  const [budgets, setBudgets] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [month, setMonth] = useState(getCurrentMonth());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = async () => {
    setLoading(true);
    try {
      const [cats, buds, txs] = await Promise.all([
        getCategories(),
        getBudgets(month),
        getTransactions(),
      ]);
      setCategories(cats);
      setBudgets(buds);
      setTransactions(txs);
      setError("");
    } catch (err) {
      setError("Failed to load budgets");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [month]);

  const handleSetBudget = async (data) => {
    try {
      await setBudget(data);
      fetchData();
      toast.success("Budget saved! 🎯");
    } catch {
      toast.error("Failed to save budget");
    }
  };

  return (
    <div className="space-y-8 min-w-0 break-words">
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-2 min-w-0 break-words flex-wrap">
        <h1 className="text-3xl font-extrabold flex-1 text-blue-700 tracking-tight min-w-0 break-words">
          Budgets
        </h1>
        <div className="flex flex-col w-full max-w-xs md:w-auto md:ml-4">
          <label
            htmlFor="budgets-month"
            className="text-sm font-medium text-gray-600 mb-1 md:mb-0 md:sr-only"
          >
            Month
          </label>
          <input
            id="budgets-month"
            type="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="input input-bordered w-full text-lg rounded-lg px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-blue-100 focus:border-blue-600 bg-white transition min-w-0 break-words"
          />
        </div>
      </div>
      {error && <div className="text-red-500 min-w-0 break-words">{error}</div>}
      <div className="rounded-2xl shadow border border-gray-200 bg-white p-4 sm:p-8 min-w-0 break-words">
        <BudgetForm
          categories={categories}
          budgets={budgets}
          month={month}
          onSetBudget={handleSetBudget}
        />
      </div>
      <div className="rounded-2xl shadow border border-gray-200 bg-white p-4 sm:p-8 min-w-0 break-words">
        <SpendingInsights
          categories={categories}
          budgets={budgets}
          transactions={transactions}
          month={month}
        />
      </div>
      <div className="rounded-2xl shadow border border-gray-200 bg-white p-4 sm:p-8 min-w-0 break-words">
        <BudgetVsActualChart
          categories={categories}
          budgets={budgets}
          transactions={transactions}
          month={month}
        />
      </div>
      {loading && (
        <div className="text-lg text-green-500 font-bold flex items-center gap-2 justify-center mt-4 min-w-0 break-words">
          ⏳ Loading...
        </div>
      )}
    </div>
  );
}
