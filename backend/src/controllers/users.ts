import { Request, Response } from 'express';
import { UserRepository } from '../repository/users';

export const getUserByEmail = async (req: Request, res: Response) => {
  try {
    const { email } = req.params;
    const user = await UserRepository.findByEmail(email);
    
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    
    console.log('🔄 Creating new user:', {
      email: userData.email,
      username: userData.username,
      auth0_id: userData.auth0_id,
      timestamp: new Date().toISOString()
    });
    
    const user = await UserRepository.create(userData);
    
    console.log('✅ User created successfully:', {
      user_id: user.user_id,
      email: user.email,
      username: user.username,
      timestamp: new Date().toISOString()
    });
    
    res.status(201).json(user);
  } catch (error) {
    console.error('❌ Error creating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const updates = req.body;
    const user = await UserRepository.update(parseInt(userId), updates);
    
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserRepository.findAll();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};