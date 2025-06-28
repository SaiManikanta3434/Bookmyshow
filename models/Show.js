import mongoose from 'mongoose';

const showSchema = new mongoose.Schema({
  movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
  venue: String,
  time: Date,
  seats: [{ number: String, isBooked: Boolean }]
});


export default mongoose.model('Show', showSchema);