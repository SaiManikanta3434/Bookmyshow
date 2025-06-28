import express from 'express';
import Movie from '../models/Movie.js';
const router = express.Router();

router.get('/city/:city', async (req, res) => {
  const movies = await Movie.find({ city: req.params.city }).populate('shows');
  res.json(movies);
});

export default router;