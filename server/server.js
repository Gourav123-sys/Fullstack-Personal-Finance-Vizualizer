require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const allowedOrigins = [
  "https://fullstack-personal-finance-vizualizer-gourav-mondals-projects.vercel.app",
  "https://fullstack-personal-finance-v-git-74de94-gourav-mondals-projects.vercel.app",
  "https://fullstack-personal-finance-vizualiz.vercel.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl, etc.)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

const transactionsRouter = require("./routes/transactions");
app.use("/api/transactions", transactionsRouter);

const categoriesRouter = require("./routes/categories");
app.use("/api/categories", categoriesRouter);

const budgetsRouter = require("./routes/budgets");
app.use("/api/budgets", budgetsRouter);

const { router: authRouter } = require("./routes/auth");
app.use("/api/auth", authRouter);

// Placeholder route
app.get("/", (req, res) => res.send("API running"));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
