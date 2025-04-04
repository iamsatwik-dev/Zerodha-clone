const { Schema } = require("mongoose");

const PositionSchema = new Schema({
  product: String,
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
  isLoss: Boolean,
});

// ✅ Correct Export
module.exports = PositionSchema; 
