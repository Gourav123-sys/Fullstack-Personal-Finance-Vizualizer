const express = require("express");
const router = express.Router();
const Budget = require("../models/Budget");
const { authMiddleware } = require("./auth");

// Get all budgets for a month (user-specific)
router.get("/", authMiddleware, async (req, res) => {
  try {
    const { month } = req.query;
    const filter = { user: req.userId };
    if (month) filter.month = month;
    const budgets = await Budget.find(filter).populate("category");
    res.json(budgets);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// Set or update a budget for a category and month (user-specific)
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { category, month, amount } = req.body;
    if (!category || !month || !amount) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const budget = await Budget.findOneAndUpdate(
      { category, month, user: req.userId },
      { amount, user: req.userId, category, month },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );
    res.status(201).json(budget);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
