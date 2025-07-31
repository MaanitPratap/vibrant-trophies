import db from '../database/database';

export interface User {
  user_id?: number;
  auth0_id?: string;
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  role: string;
  image_src?: string;
  is_active?: boolean;
  email_verified?: boolean;
  last_login?: Date;
  creation_time: Date;
  updated_at: Date;
}

export class UserRepository {
  // Get user by email
  static async findByEmail(email: string): Promise<User | null> {
    try {
      return await db.oneOrNone(
        'SELECT * FROM users WHERE email = $1',
        [email]
      );
    } catch (error) {
      console.error('Error finding user by email:', error);
      return null;
    }
  }

  // Get user by Auth0 ID
  static async findByAuth0Id(auth0Id: string): Promise<User | null> {
    try {
      return await db.oneOrNone(
        'SELECT * FROM users WHERE auth0_id = $1',
        [auth0Id]
      );
    } catch (error) {
      console.error('Error finding user by Auth0 ID:', error);
      return null;
    }
  }

  // Create new user
  static async create(userData: Partial<User>): Promise<User> {
    try {
      return await db.one(
        `INSERT INTO users (
          auth0_id, firstname, lastname, email, username, role, image_src, is_active, email_verified
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) 
        RETURNING *`,
        [
          userData.auth0_id,
          userData.firstname,
          userData.lastname,
          userData.email,
          userData.username,
          userData.role || 'user',
          userData.image_src,
          userData.is_active ?? true,
          userData.email_verified ?? false
        ]
      );
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }

  // Update user
  static async update(userId: number, updates: Partial<User>): Promise<User | null> {
    try {
      const fields = Object.keys(updates)
        .filter(key => key !== 'user_id' && key !== 'creation_time')
        .map((key, index) => `${key} = $${index + 2}`)
        .join(', ');

      const values = Object.values(updates).filter((_, index) => 
        Object.keys(updates)[index] !== 'user_id' && 
        Object.keys(updates)[index] !== 'creation_time'
      );

      return await db.oneOrNone(
        `UPDATE users SET ${fields}, updated_at = CURRENT_TIMESTAMP 
         WHERE user_id = $1 RETURNING *`,
        [userId, ...values]
      );
    } catch (error) {
      console.error('Error updating user:', error);
      return null;
    }
  }

  // Update last login
  static async updateLastLogin(userId: number): Promise<void> {
    try {
      await db.none(
        'UPDATE users SET last_login = CURRENT_TIMESTAMP WHERE user_id = $1',
        [userId]
      );
    } catch (error) {
      console.error('Error updating last login:', error);
    }
  }

  // Get all users (for admin purposes)
  static async findAll(): Promise<User[]> {
    try {
      return await db.many('SELECT * FROM users ORDER BY creation_time DESC');
    } catch (error) {
      console.error('Error finding all users:', error);
      return [];
    }
  }
}