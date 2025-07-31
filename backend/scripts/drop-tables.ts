import { dropTables } from '../src/database/migrations';
import db from '../src/database/database';

async function dropAllTables() {
  try {
    console.log('Dropping all tables...');
    await dropTables();
    console.log('✅ All tables dropped successfully');
  } catch (error) {
    console.error('❌ Error dropping tables:', error);
  } finally {
    await db.$pool.end();
  }
}

dropAllTables(); 