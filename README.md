# 💼 Personal Finance Visualizer

A modern, full-stack web application for tracking personal expenses, setting budgets, and visualizing financial data with beautiful charts and insights. Built with the MERN stack and designed specifically for Indian users with Rupee (₹) support.

![Personal Finance Visualizer](https://img.shields.io/badge/Personal%20Finance-Visualizer-blue?style=for-the-badge&logo=react)
![MERN Stack](https://img.shields.io/badge/MERN-Stack-green?style=for-the-badge&logo=mongodb)
![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red?style=for-the-badge)

---

## 🚀 Deployment Instructions (Vercel + Render)

### 1. **Deploy Backend (Render)**

- Deploy the `server/` directory to [Render](https://render.com/).
- Set environment variables in Render:
  - `MONGODB_URI` (your MongoDB Atlas connection string)
  - `JWT_SECRET` (your JWT secret key for authentication)
  - `PORT` (optional, default is 5000)
- Note your Render backend URL (e.g., `https://fullstack-personal-finance-vizualizer.onrender.com`).
- **CORS:**
  - In `server/server.js`, add your deployed Vercel frontend URL to the `allowedOrigins` array.

### 2. **Deploy Frontend (Vercel)**

- Deploy the `client/` directory to [Vercel](https://vercel.com/).
- In the Vercel dashboard, go to **Settings > Environment Variables** and add:
  - **Key:** `VITE_API_URL`
  - **Value:** _your Render backend URL_ (e.g., `https://fullstack-personal-finance-vizualizer.onrender.com`)
- Redeploy your frontend after setting the environment variable.

### 3. **API URLs in Code**

- All API helpers use:
  ```js
  import.meta.env.VITE_API_URL ||
    "https://fullstack-personal-finance-vizualizer.onrender.com";
  ```
- This ensures the frontend always talks to the correct backend in production.

### 4. **Test Live**

- Register, login, and use all features on your live site.
- If you see CORS or 405 errors, double-check the above steps.

---

## 🌟 Live Demo

- **Frontend**: [https://personal-finance-visualizer.vercel.app](https://personal-finance-visualizer.vercel.app)
- **Backend API**: [https://fullstack-personal-finance-vizualizer.onrender.com](https://fullstack-personal-finance-vizualizer.onrender.com)

## ✨ Features

### 🔐 **User Authentication**

- **User Registration & Login** - Securely create an account and log in
- **JWT-based Authentication** - All user data is private and protected
- **Protected Routes** - Only logged-in users can access dashboard, transactions, budgets, and categories
- **Logout** - Securely log out and clear session
- **Password Security** - bcryptjs hashing with salt rounds
- **Token Management** - Automatic JWT token storage and validation

### 📊 **Dashboard & Analytics**

- **Real-time Expense Tracking** - Monitor your spending with live updates
- **Interactive Charts** - Beautiful visualizations using Recharts
- **Monthly Expense Trends** - Track spending patterns over time
- **Category Breakdown** - Pie charts showing spending distribution
- **Budget vs Actual** - Compare planned vs actual spending
- **Spending Insights** - AI-powered financial analysis and recommendations

### 💰 **Transaction Management**

- **Add/Edit/Delete Transactions** - Full CRUD operations, all actions are instant (no confirmation modals)
- **Category-based Organization** - Organize expenses by categories
- **Date-based Filtering** - Filter transactions by month
- **Search & Filter** - Find specific transactions easily
- **Bulk Operations** - Manage multiple transactions efficiently
- **Instant Actions** - No confirmation dialogs for immediate feedback

### 🎯 **Budget Planning**

- **Monthly Budget Setting** - Set budgets for each category
- **Budget Tracking** - Monitor spending against budgets
- **Over-budget Alerts** - Get notified when exceeding limits
- **Budget Insights** - Detailed analysis of budget performance
- **View, Edit, and Delete All Budgets** - See all your budgets grouped by month/year in a responsive, scrollable table. Edit or delete instantly with no confirmation required.

### 🏷️ **Category Management**

- **Custom Categories** - Create personalized expense categories
- **Color-coded Categories** - Visual distinction with custom colors
- **Category-wise Analysis** - Detailed spending by category
- **Instant Delete** - Delete categories instantly (no confirmation modal)
- **Unique Category Names** - Prevent duplicate categories per user

### 🇮🇳 **Indian Localization**

- **Rupee (₹) Support** - Native Indian currency formatting
- **Indian Number System** - Lakhs and Crores formatting
- **Localized UI** - Designed for Indian users
- **Currency Display** - All amounts shown in Indian Rupees

### 📱 **Responsive Design**

- **Mobile-First** - Works perfectly on all devices
- **Modern UI/UX** - Beautiful gradient designs and animations
- **Smooth Transitions** - Hover effects and micro-interactions
- **Accessibility** - Proper ARIA labels and keyboard navigation

## 🛠️ Tech Stack

### **Frontend**

- **React 19.1.0** - Latest React with modern features and hooks
- **React Router DOM 7.6.3** - Client-side routing with protected routes
- **Tailwind CSS 4.1.11** - Utility-first CSS framework for responsive design
- **Recharts 3.0.2** - Beautiful and interactive chart library
- **React Hot Toast 2.5.2** - Elegant notification system
- **React Icons 5.5.0** - Comprehensive icon library
- **Vite 7.0.2** - Fast build tool and development server

### **Backend**

- **Node.js** - JavaScript runtime environment
- **Express.js 5.1.0** - Web application framework
- **MongoDB** - NoSQL database with Mongoose ODM
- **Mongoose 8.16.1** - MongoDB object modeling
- **JWT (jsonwebtoken 9.0.2)** - Authentication and authorization
- **bcryptjs 3.0.2** - Password hashing and security
- **CORS 2.8.5** - Cross-origin resource sharing
- **dotenv 17.0.1** - Environment variable management

### **Deployment**

- **Vercel** - Frontend hosting with automatic deployments
- **Render** - Backend hosting with environment variable support
- **MongoDB Atlas** - Cloud database hosting

### **Development Tools**

- **Git** - Version control system
- **ESLint 9.30.1** - Code linting and formatting
- **ESLint React Hooks 5.2.0** - React hooks linting
- **ESLint React Refresh 0.4.20** - Fast refresh linting
- **TypeScript Support** - Type definitions for React
- **Postman** - API testing

## 🗄️ Database Schema

### **User Model**

```javascript
{
  name: String (required),
  email: String (unique, required, lowercase),
  password: String (hashed, required, min 6 chars),
  timestamps: true
}
```

### **Transaction Model**

```javascript
{
  amount: Number (required),
  date: Date (required),
  description: String (required, trimmed),
  category: ObjectId (ref: Category, required),
  user: ObjectId (ref: User, required),
  timestamps: true
}
```

### **Category Model**

```javascript
{
  name: String (unique per user, required, trimmed),
  color: String (default: "#8884d8"),
  user: ObjectId (ref: User, required)
}
```

### **Budget Model**

```javascript
{
  category: ObjectId (ref: Category, required),
  month: String (format: 'YYYY-MM', required),
  amount: Number (required),
  user: ObjectId (ref: User, required),
  timestamps: true,
  unique index: {category: 1, month: 1}
}
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or Atlas)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Gourav123-sys/personal-finance-visualizer.git
   cd personal-finance-visualizer
   ```

2. **Install dependencies**

   ```bash
   # Install backend dependencies
   cd server
   npm install

   # Install frontend dependencies
   cd ../client
   npm install
   ```

3. **Environment Setup**

   Create `.env` file in the server directory:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   ```

4. **Run the application**

   ```bash
   # Start backend server (from server directory)
   npm start

   # Start frontend development server (from client directory)
   npm run dev
   ```

5. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

## 📁 Project Structure

```
personal-finance-visualizer/
├── client/                 # Frontend React application
│   ├── public/            # Static files
│   ├── src/
│   │   ├── api/           # API service functions
│   │   │   ├── authApi.js
│   │   │   ├── authToken.js
│   │   │   ├── budgetApi.js
│   │   │   ├── categoryApi.js
│   │   │   └── transactionApi.js
│   │   ├── components/    # Reusable React components
│   │   │   ├── BudgetForm.jsx
│   │   │   ├── BudgetVsActualChart.jsx
│   │   │   ├── CategoryAddForm.jsx
│   │   │   ├── CategoryPieChart.jsx
│   │   │   ├── CategorySelect.jsx
│   │   │   ├── DashboardSummary.jsx
│   │   │   ├── MonthlyExpensesChart.jsx
│   │   │   ├── SpendingInsights.jsx
│   │   │   ├── TransactionForm.jsx
│   │   │   └── TransactionList.jsx
│   │   ├── pages/         # Page components
│   │   │   ├── BudgetsPage.jsx
│   │   │   ├── CategoriesPage.jsx
│   │   │   ├── DashboardPage.jsx
│   │   │   ├── LandingPage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   ├── RegisterPage.jsx
│   │   │   └── TransactionsPage.jsx
│   │   ├── App.jsx        # Main app component with routing
│   │   ├── AuthContext.jsx # Authentication context provider
│   │   └── main.jsx       # App entry point
│   ├── package.json       # Frontend dependencies
│   ├── vite.config.js     # Vite configuration
│   └── vercel.json        # Vercel deployment config
├── server/                # Backend Node.js application
│   ├── models/            # MongoDB schemas
│   │   ├── Budget.js
│   │   ├── Category.js
│   │   ├── Transaction.js
│   │   └── User.js
│   ├── routes/            # API routes
│   │   ├── auth.js
│   │   ├── budgets.js
│   │   ├── categories.js
│   │   └── transactions.js
│   ├── server.js          # Express server setup
│   └── package.json       # Backend dependencies
└── README.md              # Project documentation
```

## 🔌 API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login and receive JWT
- `GET /api/auth/me` - Get current user info (requires JWT)

### Transactions

- `GET /api/transactions` - Get all user transactions
- `POST /api/transactions` - Create new transaction
- `PUT /api/transactions/:id` - Update transaction
- `DELETE /api/transactions/:id` - Delete transaction

### Categories

- `GET /api/categories` - Get all user categories
- `POST /api/categories` - Create new category
- `DELETE /api/categories/:id` - Delete category

### Budgets

- `GET /api/budgets?month=YYYY-MM` - Get budgets for month
- `POST /api/budgets` - Set budget for category

## 🎨 UI Components

### Core Components

- **DashboardSummary** - Overview cards with key metrics
- **TransactionForm** - Add/edit transaction form
- **TransactionList** - Display list of transactions
- **CategoryPieChart** - Spending distribution chart
- **MonthlyExpensesChart** - Monthly spending trends
- **BudgetVsActualChart** - Budget comparison chart
- **SpendingInsights** - Budget analysis and insights
- **CategorySelect** - Category selection dropdown
- **CategoryAddForm** - Category creation form
- **BudgetForm** - Budget setting form

### Features

- **Responsive Design** - Works on all screen sizes
- **Modern Animations** - Smooth transitions and hover effects
- **Gradient Backgrounds** - Beautiful visual design
- **Interactive Charts** - Hover effects and tooltips
- **Loading States** - User-friendly loading indicators
- **Custom Scrollbars** - Enhanced scrolling experience

## 🔒 Security Features

- **JWT Authentication** - All finance data is user-specific and protected by JWT
- **Password Hashing** - bcryptjs with salt rounds for secure password storage
- **CORS Configuration** - Secure cross-origin requests
- **Input Validation** - Server-side data validation and sanitization
- **Error Handling** - Comprehensive error management
- **Environment Variables** - Secure configuration management
- **Protected Routes** - Frontend and backend route protection

## 🔑 Authentication Flow

1. **Register**: Create a new account with name, email, and password (password is hashed with bcryptjs).
2. **Login**: Obtain a JWT token by logging in with email and password.
3. **Token Storage**: JWT token is stored in localStorage for persistence.
4. **Protected API Calls**: All finance-related API requests require the JWT in the `Authorization: Bearer <token>` header.
5. **Frontend Protection**: Only authenticated users can access dashboard, transactions, budgets, and categories. Unauthenticated users are redirected to login/landing.
6. **Token Validation**: Automatic token validation on app load and API calls.
7. **Logout**: Clears the JWT and user session from the browser.

## 🚀 Deployment

### Frontend (Vercel)

1. Connect your GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Add environment variable: `VITE_API_URL`
5. Deploy automatically on push

### Backend (Render)

1. Connect your GitHub repository to Render
2. Set build command: `npm install`
3. Set start command: `npm start`
4. Add environment variables: `MONGODB_URI`, `JWT_SECRET`, `PORT`
5. Configure CORS for your frontend domain

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👨‍💻 Author

**Gourav Mondal**

- GitHub: [@Gourav123-sys](https://github.com/Gourav123-sys)
- LinkedIn: [Gourav Mondal](https://www.linkedin.com/in/gourav-mondal-55a812204/)
- Email: gouravmondal30june2002@gmail.com

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Recharts** - For the beautiful chart library
- **Vercel & Render** - For the hosting platforms
- **MongoDB** - For the database solution

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/Gourav123-sys/personal-finance-visualizer?style=social)
![GitHub forks](https://img.shields.io/github/forks/Gourav123-sys/personal-finance-visualizer?style=social)
![GitHub issues](https://img.shields.io/github/issues/Gourav123-sys/personal-finance-visualizer)
![GitHub pull requests](https://img.shields.io/github/issues-pr/Gourav123-sys/personal-finance-visualizer)

---

⭐ **Star this repository if you found it helpful!**

## 📝 Notes & UI Consistency

- **All delete and edit actions are instant** for budgets, transactions, and categories—no confirmation modals or alerts, for a fast and consistent user experience.
- **Budgets are grouped by month and year** in a scrollable, responsive table for easy management.
- **All tables and modals** are fully responsive and match the app's modern, gradient-themed design.
- **JWT tokens expire after 7 days** for security.
- **All user data is isolated** - users can only access their own transactions, categories, and budgets.
- **Mobile-first responsive design** ensures optimal experience across all devices.
