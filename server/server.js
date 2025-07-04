require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
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

// Placeholder route
app.get("/", (req, res) => res.send("API running"));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
