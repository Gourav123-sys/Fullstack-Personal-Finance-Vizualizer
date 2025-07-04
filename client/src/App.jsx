import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import DashboardPage from "./pages/DashboardPage";
import TransactionsPage from "./pages/TransactionsPage";
import BudgetsPage from "./pages/BudgetsPage";
import CategoriesPage from "./pages/CategoriesPage";

function NavBar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { to: "/dashboard", label: "Dashboard" },
    { to: "/transactions", label: "Transactions" },
    { to: "/budgets", label: "Budgets" },
    { to: "/categories", label: "Categories" },
  ];
  return (
    <nav className="sticky top-0 z-20 bg-white shadow-sm mb-8 border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* App Name - Left Side */}
        <div className="flex-shrink-0">
          <Link
            to="/"
            className="text-xl sm:text-2xl font-bold text-blue-700 tracking-tight hover:text-blue-800 transition-colors"
          >
            Personal Finance Visualizer
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center px-3 py-2 border rounded text-gray-700 border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
        >
          <span className="text-xl">{menuOpen ? "✖" : "☰"}</span>
        </button>

        {/* Desktop Navigation - Right Side */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`transition-all px-3 lg:px-4 py-2 rounded-lg font-medium text-sm lg:text-base hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 ${
                location.pathname === link.to
                  ? "text-blue-700 bg-blue-50 border border-blue-200"
                  : "text-gray-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-b border-gray-200 transition-all duration-300 ${
            menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="flex flex-col py-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`transition-all px-4 py-3 font-medium text-base hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 ${
                  location.pathname === link.to
                    ? "text-blue-700 bg-blue-50 border-l-4 border-blue-700"
                    : "text-gray-700"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-gray-100 border-t border-gray-200 py-4 mt-8 text-center text-sm text-gray-500">
      © 2024 Gourav Mondal. All rights reserved.
    </footer>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <NavBar />
        <main className="flex-1 max-w-4xl mx-auto px-2 sm:px-4 md:px-4 w-full">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/transactions" element={<TransactionsPage />} />
            <Route path="/budgets" element={<BudgetsPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

export default App;
