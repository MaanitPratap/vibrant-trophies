import db from '../src/database/database';
import { createTables } from '../src/database/migrations';
import { UserRepository } from '../src/repository/users';

async function testDatabase() {
  try {
    console.log('Testing database connection...');
    
    // Test connection
    const result = await db.one('SELECT NOW() as current_time');
    console.log('✅ Database connection successful:', result.current_time);
    
    // Create tables
    console.log('Creating tables...');
    await createTables();
    console.log('✅ Tables created successfully');
    
    // Test user creation
    console.log('Testing user creation...');
    const testUser = await UserRepository.create({
      firstname: 'Test',
      lastname: 'User',
      email: 'test@example.com',
      username: 'testuser',
      role: 'user',
      auth0_id: 'auth0|test123'
    });
    console.log('✅ User created successfully:', testUser);
    
    // Test user retrieval
    const foundUser = await UserRepository.findByEmail('test@example.com');
    console.log('✅ User retrieval successful:', foundUser);
    
    // Clean up test user
    await db.none('DELETE FROM users WHERE email = $1', ['test@example.com']);
    console.log('✅ Test user cleaned up');
    
    console.log('🎉 All database tests passed!');
    
  } catch (error) {
    console.error('❌ Database test failed:', error);
  } finally {
    await db.$pool.end();
  }
}

testDatabase(); 