# 💼 Personal Finance Visualizer

A modern, full-stack web application for tracking personal expenses, setting budgets, and visualizing financial data with beautiful charts and insights. Built with the MERN stack and designed specifically for Indian users with Rupee (₹) support.

![Personal Finance Visualizer](https://img.shields.io/badge/Personal%20Finance-Visualizer-blue?style=for-the-badge&logo=react)
![MERN Stack](https://img.shields.io/badge/MERN-Stack-green?style=for-the-badge&logo=mongodb)
![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red?style=for-the-badge)

## 🌟 Live Demo

- **Frontend**: [https://personal-finance-visualizer.vercel.app](https://personal-finance-visualizer.vercel.app)
- **Backend API**: [https://fullstack-personal-finance-vizualizer.onrender.com](https://fullstack-personal-finance-vizualizer.onrender.com)

## ✨ Features

### 📊 **Dashboard & Analytics**

- **Real-time Expense Tracking** - Monitor your spending with live updates
- **Interactive Charts** - Beautiful visualizations using Recharts
- **Monthly Expense Trends** - Track spending patterns over time
- **Category Breakdown** - Pie charts showing spending distribution
- **Budget vs Actual** - Compare planned vs actual spending

### 💰 **Transaction Management**

- **Add/Edit/Delete Transactions** - Full CRUD operations
- **Category-based Organization** - Organize expenses by categories
- **Date-based Filtering** - Filter transactions by month
- **Search & Filter** - Find specific transactions easily
- **Bulk Operations** - Manage multiple transactions efficiently

### 🎯 **Budget Planning**

- **Monthly Budget Setting** - Set budgets for each category
- **Budget Tracking** - Monitor spending against budgets
- **Over-budget Alerts** - Get notified when exceeding limits
- **Budget Insights** - Detailed analysis of budget performance

### 🏷️ **Category Management**

- **Custom Categories** - Create personalized expense categories
- **Color-coded Categories** - Visual distinction with custom colors
- **Category-wise Analysis** - Detailed spending by category

### 🇮🇳 **Indian Localization**

- **Rupee (₹) Support** - Native Indian currency formatting
- **Indian Number System** - Lakhs and Crores formatting
- **Localized UI** - Designed for Indian users

### 📱 **Responsive Design**

- **Mobile-First** - Works perfectly on all devices
- **Modern UI/UX** - Beautiful gradient designs and animations

## 🛠️ Tech Stack

### **Frontend**

- **React 19** - Latest React with modern features
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Recharts** - Beautiful chart library
- **React Hot Toast** - Elegant notifications
- **Vite** - Fast build tool and dev server

### **Backend**

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing

### **Deployment**

- **Vercel** - Frontend hosting
- **Render** - Backend hosting
- **MongoDB Atlas** - Cloud database

### **Development Tools**

- **Git** - Version control
- **ESLint** - Code linting
- **Postman** - API testing

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
│   │   ├── components/    # Reusable React components
│   │   ├── pages/         # Page components
│   │   ├── App.jsx        # Main app component
│   │   └── main.jsx       # App entry point
│   ├── package.json       # Frontend dependencies
│   └── vite.config.js     # Vite configuration
├── server/                # Backend Node.js application
│   ├── models/            # MongoDB schemas
│   ├── routes/            # API routes
│   ├── server.js          # Express server setup
│   └── package.json       # Backend dependencies
└── README.md              # Project documentation
```

## 🔧 API Endpoints

### Transactions

- `GET /api/transactions` - Get all transactions
- `POST /api/transactions` - Create new transaction
- `PUT /api/transactions/:id` - Update transaction
- `DELETE /api/transactions/:id` - Delete transaction

### Categories

- `GET /api/categories` - Get all categories
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

### Features

- **Responsive Design** - Works on all screen sizes
- **Modern Animations** - Smooth transitions and hover effects
- **Gradient Backgrounds** - Beautiful visual design
- **Interactive Charts** - Hover effects and tooltips
- **Loading States** - User-friendly loading indicators

## 🔒 Security Features

- **CORS Configuration** - Secure cross-origin requests
- **Input Validation** - Server-side data validation
- **Error Handling** - Comprehensive error management
- **Environment Variables** - Secure configuration management

## 🚀 Deployment

### Frontend (Vercel)

1. Connect your GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy automatically on push

### Backend (Render)

1. Connect your GitHub repository to Render
2. Set build command: `npm install`
3. Set start command: `npm start`
4. Add environment variables


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
