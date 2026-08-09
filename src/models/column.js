const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
  content: { type: String, required: true },
  authorId: { type: String },
}, { timestamps: true });

const ColumnSchema = new mongoose.Schema({
  title: { type: String, required: true },
  order: { type: Number, default: 0 },
  cards: [CardSchema],
}, { timestamps: true });

module.exports = mongoose.model('Column', ColumnSchema);
