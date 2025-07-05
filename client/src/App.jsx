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
    { to: "/dashboard", label: "Dashboard", icon: "📊" },
    { to: "/transactions", label: "Transactions", icon: "💰" },
    { to: "/budgets", label: "Budgets", icon: "🎯" },
    { to: "/categories", label: "Categories", icon: "🏷️" },
  ];
  return (
    <nav className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100 mb-8">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* App Name - Left Side */}
        <div className="flex-shrink-0">
          <Link
            to="/"
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent tracking-tight hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2"
          >
            <span className="text-2xl">💼</span>
            Personal Finance Visualizer
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center px-3 py-2 border rounded-lg text-gray-700 border-gray-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-200"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
        >
          <span className="text-xl">{menuOpen ? "✖" : "☰"}</span>
        </button>

        {/* Desktop Navigation - Right Side */}
        <div className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`transition-all duration-200 px-4 py-2 rounded-xl font-medium text-sm lg:text-base hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 flex items-center gap-2 ${
                location.pathname === link.to
                  ? "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border border-blue-200 shadow-sm"
                  : "text-gray-700"
              }`}
            >
              <span className="text-lg">{link.icon}</span>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-sm shadow-xl border-b border-gray-100 transition-all duration-300 ${
            menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="flex flex-col py-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`transition-all duration-200 px-4 py-3 font-medium text-base hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 flex items-center gap-3 ${
                  location.pathname === link.to
                    ? "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-l-4 border-blue-600"
                    : "text-gray-700"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                <span className="text-xl">{link.icon}</span>
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
    <footer className="w-full bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200 py-6 mt-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm text-gray-600">
          © 2024 Gourav Mondal. All rights reserved.
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Built with ❤️ for better financial management
        </p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30">
        <NavBar />
        <main className="flex-1 max-w-6xl mx-auto px-4 w-full">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/transactions" element={<TransactionsPage />} />
            <Route path="/budgets" element={<BudgetsPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#363636",
              color: "#fff",
              borderRadius: "12px",
              padding: "16px",
            },
          }}
        />
      </div>
    </Router>
  );
}

export default App;
