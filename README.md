# Personal Finance Visualizer

A modern full-stack web app to track expenses, manage categories, and set monthly budgets. Visualize your spending with interactive charts and a clean, responsive dashboard. Built with React, Express.js, and MongoDB.

---

## 🚀 Live Demo

- **Frontend:**
  - [https://fullstack-personal-finance-vizualizer-gourav-mondals-projects.vercel.app/](https://fullstack-personal-finance-vizualizer-gourav-mondals-projects.vercel.app/)
  - [https://fullstack-personal-finance-v-git-74de94-gourav-mondals-projects.vercel.app/](https://fullstack-personal-finance-v-git-74de94-gourav-mondals-projects.vercel.app/)
  - [https://fullstack-personal-finance-vizualiz.vercel.app/](https://fullstack-personal-finance-vizualiz.vercel.app/)
- **Backend API:**
  - [https://fullstack-personal-finance-vizualizer.onrender.com](https://fullstack-personal-finance-vizualizer.onrender.com)

---

## 🚀 Features

### Stage 1: Basic Transaction Tracking

- Add, edit, and delete transactions (amount, date, description, category)
- Transaction list view with edit/delete actions
- Monthly expenses bar chart
- Basic form validation and error handling

### Stage 2: Categories

- Predefined and custom categories for transactions
- Category-wise pie chart
- Dashboard with summary cards: total expenses, category breakdown, recent transactions

### Stage 3: Budgeting

- Set monthly budgets per category
- Budget vs. actual comparison chart
- Simple spending insights (over/under budget)

### General

- Professional, responsive UI/UX
- Accessible and mobile-friendly
- Toast notifications and clear feedback

---

## 🛠️ Tech Stack

- **Frontend:** React (Vite), Tailwind CSS, Recharts, React Router
- **Backend:** Node.js, Express.js, Mongoose, MongoDB, CORS, dotenv
- **Dev Tools:** ESLint, Nodemon

---

## 📁 Folder Structure

```
assignment/
  client/      # React frontend (Vite, Tailwind, Recharts)
    src/
      api/         # API helpers
      components/  # Reusable UI components
      pages/       # App pages (Dashboard, Transactions, Budgets, Categories)
      index.css
      main.jsx
    package.json
    ...
  server/      # Node.js/Express backend
    models/    # Mongoose models (Transaction, Category, Budget)
    routes/    # Express routes (transactions, categories, budgets)
    server.js  # Main server entry
    package.json
    ...
  README.md    # Project documentation
  .gitignore   # Git ignore rules
```

---

## ⚡ Quick Start

### Use the Live Demo

- Visit the [live frontend](https://fullstack-personal-finance-vizualizer-gourav-mondals-projects.vercel.app/) and start tracking your finances instantly!
- No setup required.

### Local Development Setup

#### Prerequisites

- Node.js (v18+ recommended)
- MongoDB (local or Atlas)

#### 1. Clone the repository

```bash
git clone <your-repo-url>
cd assignment
```

#### 2. Setup the backend

```bash
cd server
npm install
# Create a .env file with:
# MONGODB_URI=<your-mongodb-uri>
# PORT=5000 (optional)
# Optionally, set ALLOWED_ORIGINS (comma-separated) for CORS
npm run dev
```

#### 3. Setup the frontend

```bash
cd ../client
npm install
# Optionally, create a .env file and set:
# VITE_API_URL=https://fullstack-personal-finance-vizualizer.onrender.com/api
npm run dev
```

- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

---

## 🖥️ Usage

- Open the app in your browser
- Add, edit, and delete transactions
- Create and manage categories
- Set monthly budgets and compare with actual spending
- Visualize your finances with interactive charts and summary cards

---

## 📸 Screenshots

<!-- Add screenshots here -->

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 🙋‍♂️ Contact

For questions or feedback, open an issue or contact the maintainer.
