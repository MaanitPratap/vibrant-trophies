import pgPromise from 'pg-promise';
import dotenv from 'dotenv';

dotenv.config();

const pgp = pgPromise({});

const url = `postgres://${process.env.POSTGRES_USERNAME}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB_NAME}`;
const db = pgp(url);

// Test connection
db.connect()
  .then(() => {
    console.log(`Successfully Connected to Database ${process.env.POSTGRES_DB_NAME}`);
  })
  .catch((error) => {
    console.error('Database connection failed:', error);
  });

export default db;