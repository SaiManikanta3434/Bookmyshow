import express from 'express';
import {
  createMovie,
  getMovies,
  getMovieById,
  updateMovie,
  deleteMovie
} from '../controllers/moviesController.js';

const router = express.Router();

// Create a new movie
router.post('/', createMovie);

// Get all movies
router.get('/', getMovies);

// Get a movie by ID
router.get('/:id', getMovieById);

// Update a movie
router.put('/:id', updateMovie);

// Delete a movie
router.delete('/:id', deleteMovie);

export default router;