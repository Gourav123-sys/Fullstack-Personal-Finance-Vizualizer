const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  color: {
    type: String,
    default: "#8884d8", // Default color for charts
  },
});

module.exports = mongoose.model("Category", categorySchema);
