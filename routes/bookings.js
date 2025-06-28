import express from 'express';
import Booking from '../models/Booking.js';
import Show from '../models/Show.js';
import { authenticate } from '../middlewares/userAuth.js';
const router = express.Router();





router.post('/:showId', authenticate, async (req, res) => {
  const { seats } = req.body;
  const show = await Show.findById(req.params.showId);

  for (let s of seats) {
    const seat = show.seats.find(seat => seat.number === s);
    if (seat.isBooked) return res.status(400).json({ message: `Seat ${s} is already booked.` });
    seat.isBooked = true;
  }
  await show.save();
  const booking = new Booking({ user: req.user.userId, show: show._id, seats });
  await booking.save();
  res.json({ message: 'Booking successful' });
});

router.get('/history', authenticate, async (req, res) => {
  const history = await Booking.find({ user: req.user.userId }).populate('show');
  res.json(history);
});

export default router;
