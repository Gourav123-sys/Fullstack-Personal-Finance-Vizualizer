const express = require("express");
const router = express.Router();
const Category = require("../models/Category");

// Get all categories
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// Add a new category
router.post("/", async (req, res) => {
  try {
    const { name, color } = req.body;
    if (!name) return res.status(400).json({ error: "Name is required" });
    const category = new Category({ name, color });
    await category.save();
    res.status(201).json(category);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// Delete a category by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Category.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ error: "Category not found" });
    res.json({ message: "Category deleted" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
