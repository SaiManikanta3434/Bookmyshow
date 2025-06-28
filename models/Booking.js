import mongoose from 'mongoose';


const bookingSchema = new mongoose.Schema({

  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  show: { type: mongoose.Schema.Types.ObjectId, ref: 'Show' },
  seats: [String],
  bookingTime: { type: Date, default: Date.now }
});


export default mongoose.model('Booking', bookingSchema);
