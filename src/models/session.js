import mongoose from 'mongoose';

const VoteSchema = new mongoose.Schema({
  participant_id: { type: String, required: true },
  vote_count: { type: Number, default: 0 },
});

const CardSchema = new mongoose.Schema({
  content: { type: String, required: true },
  author_id: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  votes: [VoteSchema],
});

const ColumnSchema = new mongoose.Schema({
  title: { type: String, required: true },
  order: { type: Number, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  cards: [CardSchema],
});

const ClusterSchema = new mongoose.Schema({
  title: { type: String, required: true },
  card_ids: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card' }],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const ActionItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  related_card_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Card' },
  status: { type: String, enum: ['open', 'in_progress', 'done'], default: 'open' },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const SessionSchema = new mongoose.Schema({
  session_code: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  created_by: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  columns: [ColumnSchema],
  clusters: [ClusterSchema],
  action_items: [ActionItemSchema],
});

export const Session = mongoose.model('Session', SessionSchema);
