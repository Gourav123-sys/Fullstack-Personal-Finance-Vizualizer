import { useEffect, useState } from "react";
import DashboardSummary from "../components/DashboardSummary";
import MonthlyExpensesChart from "../components/MonthlyExpensesChart";
import CategoryPieChart from "../components/CategoryPieChart";
import SpendingInsights from "../components/SpendingInsights";
import { getTransactions } from "../api/transactionApi";
import { getCategories } from "../api/categoryApi";
import { getBudgets } from "../api/budgetApi";

function getCurrentMonth() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
}

export default function DashboardPage() {
  const [transactions, setTransactions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [budgets, setBudgets] = useState([]);
  const [month, setMonth] = useState(getCurrentMonth());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = async () => {
    setLoading(true);
    try {
      const [txs, cats, buds] = await Promise.all([
        getTransactions(),
        getCategories(),
        getBudgets(month),
      ]);
      setTransactions(txs);
      setCategories(cats);
      setBudgets(buds);
      setError("");
    } catch (err) {
      setError("Failed to load dashboard data");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [month]);

  return (
    <div className="space-y-8 px-2 sm:px-4 md:px-0 min-w-0 break-words">
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-2 min-w-0 break-words flex-wrap">
        <h1 className="text-3xl font-extrabold flex-1 text-blue-700 tracking-tight min-w-0 break-words">
          Dashboard
        </h1>
        <div className="flex flex-col w-full max-w-xs md:w-auto md:ml-4">
          <label
            htmlFor="dashboard-month"
            className="text-sm font-medium text-gray-600 mb-1 md:mb-0 md:sr-only"
          >
            Month
          </label>
          <input
            id="dashboard-month"
            type="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="input input-bordered w-full text-lg rounded-lg px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-blue-100 focus:border-blue-600 bg-white transition min-w-0 break-words"
          />
        </div>
      </div>
      {error && <div className="text-red-500 min-w-0 break-words">{error}</div>}
      <DashboardSummary transactions={transactions} categories={categories} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-w-0 break-words">
        <div className="rounded-2xl shadow border border-gray-200 bg-white p-4 sm:p-6 md:p-8 min-w-0 break-words">
          <h2 className="text-xl font-extrabold mb-4 text-blue-600 min-w-0 break-words">
            Monthly Expenses
          </h2>
          <MonthlyExpensesChart transactions={transactions} />
        </div>
        <div className="rounded-2xl shadow border border-gray-200 bg-white p-4 sm:p-6 md:p-8 min-w-0 break-words">
          <h2 className="text-xl font-extrabold mb-4 text-blue-600 min-w-0 break-words">
            Category Breakdown
          </h2>
          <CategoryPieChart
            transactions={transactions}
            categories={categories}
          />
        </div>
      </div>
      <div className="rounded-2xl shadow border border-gray-200 bg-white p-4 sm:p-6 md:p-8 min-w-0 break-words">
        <SpendingInsights
          categories={categories}
          budgets={budgets}
          transactions={transactions}
          month={month}
        />
      </div>
      {loading && (
        <div className="text-lg text-blue-500 font-bold flex items-center gap-2 justify-center mt-4 min-w-0 break-words">
          ⏳ Loading...
        </div>
      )}
    </div>
  );
}
