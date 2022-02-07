const mongoose = require("mongoose");

const petsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  type: {
    type: String,
    enum: ["Dog", "Cat", "Horse", "Other"],
    required: true,
  },
  color: {
    type: String,
    enum: ["Black", "White"],
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

// Export the name of table and achema
module.exports = mongoose.model("pets", petsSchema);
