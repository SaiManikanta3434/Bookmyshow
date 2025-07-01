import express from 'express';
import {
  createShow,
  getShows,
  getShowById,
  updateShow,
  deleteShow
} from '../controllers/showsController.js';

const router = express.Router();

// Create a new show
router.post('/', createShow);

// Get all shows
router.get('/', getShows);

// Get a show by ID
router.get('/:id', getShowById);

// Update a show
router.put('/:id', updateShow);

// Delete a show
router.delete('/:id', deleteShow);

export default router; 