import { Router } from 'express';
import { getUserByEmail, createUser, updateUser, getAllUsers } from '../controllers/users';

const router = Router();

// GET /api/users/email/:email - Get user by email
router.get('/email/:email', getUserByEmail);

// POST /api/users - Create new user
router.post('/', createUser);

// PUT /api/users/:userId - Update user
router.put('/:userId', updateUser);

// GET /api/users - Get all users (admin only)
router.get('/', getAllUsers);

export default router; 