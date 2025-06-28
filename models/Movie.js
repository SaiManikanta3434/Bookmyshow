import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  title: String,
  description: String,
  city: String,
  shows: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Show' }]
});

export default mongoose.model('Movie', movieSchema);