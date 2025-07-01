import express from 'express';
import {
  createBooking,
  getBookings,
  getBookingById,
  updateBooking,
  deleteBooking
} from '../controllers/bookingController.js';
import { authenticate } from '../middlewares/userAuth.js';

const router = express.Router();

router.use(authenticate); // Protect all booking routes

// Create a new booking
router.post('/', createBooking);

// Get all bookings
router.get('/', getBookings);

// Get a booking by ID
router.get('/:id', getBookingById);

// Update a booking
router.put('/:id', updateBooking);

// Delete a booking
router.delete('/:id', deleteBooking);

export default router;
