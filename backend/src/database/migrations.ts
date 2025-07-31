import db from './database';

export const createTables = async () => {
  try {
    // Create users table
    await db.query(`
      CREATE TABLE IF NOT EXISTS users (
        user_id SERIAL PRIMARY KEY,
        auth0_id VARCHAR(255) UNIQUE,
        firstname VARCHAR(100) NOT NULL,
        lastname VARCHAR(100) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        username VARCHAR(100) UNIQUE NOT NULL,
        role VARCHAR(50) NOT NULL DEFAULT 'user',
        image_src TEXT,
        is_active BOOLEAN DEFAULT true,
        email_verified BOOLEAN DEFAULT false,
        last_login TIMESTAMP,
        creation_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create indexes
    await db.query(`CREATE INDEX IF NOT EXISTS idx_users_email ON users(email)`);
    await db.query(`CREATE INDEX IF NOT EXISTS idx_users_username ON users(username)`);
    await db.query(`CREATE INDEX IF NOT EXISTS idx_users_auth0_id ON users(auth0_id)`);

    // Create trigger function for updating updated_at
    await db.query(`
      CREATE OR REPLACE FUNCTION update_updated_at_column()
      RETURNS TRIGGER AS $$
      BEGIN
        NEW.updated_at = CURRENT_TIMESTAMP;
        RETURN NEW;
      END;
      $$ language 'plpgsql';
    `);

    // Create trigger for users table
    await db.query(`
      DROP TRIGGER IF EXISTS update_users_updated_at ON users;
      CREATE TRIGGER update_users_updated_at
        BEFORE UPDATE ON users
        FOR EACH ROW
        EXECUTE FUNCTION update_updated_at_column();
    `);

    console.log('Database tables created successfully');
  } catch (error) {
    console.error('Error creating tables:', error);
  }
};

export const dropTables = async () => {
  try {
    await db.query('DROP TABLE IF EXISTS users CASCADE');
    console.log('Database tables dropped successfully');
  } catch (error) {
    console.error('Error dropping tables:', error);
  }
};