const express = require("express");
const router = express.Router();
const Transaction = require("../models/Transaction");

// Get all transactions
router.get("/", async (req, res) => {
  try {
    const transactions = await Transaction.find()
      .populate("category")
      .sort({ date: -1 });
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// Add a new transaction
router.post("/", async (req, res) => {
  try {
    const { amount, date, description, category } = req.body;
    if (!amount || !date || !description || !category) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const transaction = new Transaction({
      amount,
      date,
      description,
      category,
    });
    await transaction.save();
    res.status(201).json(transaction);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// Update a transaction
router.put("/:id", async (req, res) => {
  try {
    const { amount, date, description, category } = req.body;
    const transaction = await Transaction.findByIdAndUpdate(
      req.params.id,
      { amount, date, description, category },
      { new: true }
    );
    if (!transaction) return res.status(404).json({ error: "Not found" });
    res.json(transaction);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// Delete a transaction
router.delete("/:id", async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndDelete(req.params.id);
    if (!transaction) return res.status(404).json({ error: "Not found" });
    res.json({ message: "Transaction deleted" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
