import express from 'express';
import Movie from '../models/Movie.js';
import Show from '../models/Show.js';
import { authenticate } from '../middlewares/userAuth.js';
const router = express.Router();

router.post('/movie', authenticate, async (req, res) => {
  if (!req.user.isAdmin) return res.sendStatus(403);
  const movie = new Movie(req.body);
  await movie.save();
  res.json(movie);
});

router.post('/show/:movieId', authenticate, async (req, res) => {
  if (!req.user.isAdmin) return res.sendStatus(403);
  const { venue, time, seatCount } = req.body;
  const seats = Array.from({ length: seatCount }, (_, i) => ({ number: `S${i + 1}`, isBooked: false }));
  const show = new Show({ movie: req.params.movieId, venue, time, seats });
  await show.save();
  await Movie.findByIdAndUpdate(req.params.movieId, { $push: { shows: show._id } });
  res.json(show);
});

export default router;
