import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-white px-4">
      <div className="max-w-2xl w-full text-center space-y-8 py-16 animate-fade-in-up">
        <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Personal Finance Visualizer
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Take control of your finances. Track spending, set budgets, and gain
          insights with beautiful charts and a modern dashboard.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/login"
            className="btn-gradient px-8 py-3 rounded-xl text-white font-semibold text-lg shadow-lg hover-lift"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-white border-2 border-blue-500 text-blue-600 px-8 py-3 rounded-xl font-semibold text-lg shadow-lg hover:bg-blue-50 hover-lift"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
