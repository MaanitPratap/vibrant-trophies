import db from '../src/database/database';
import { createTables } from '../src/database/migrations';

async function verifySetup() {
  console.log('🔍 Verifying backend setup...\n');

  // Check environment variables
  console.log('1. Checking environment variables...');
  const requiredEnvVars = [
    'POSTGRES_USERNAME',
    'POSTGRES_PASSWORD', 
    'POSTGRES_HOST',
    'POSTGRES_PORT',
    'POSTGRES_DB_NAME'
  ];

  const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
  
  if (missingVars.length > 0) {
    console.log('❌ Missing environment variables:', missingVars);
    console.log('💡 Create a .env file in the backend directory with the required variables');
    return;
  } else {
    console.log('✅ Environment variables are set');
  }

  // Test database connection
  console.log('\n2. Testing database connection...');
  try {
    const result = await db.one('SELECT NOW() as current_time');
    console.log('✅ Database connection successful:', result.current_time);
  } catch (error) {
    console.log('❌ Database connection failed:', error);
    console.log('💡 Make sure PostgreSQL is running: docker-compose up -d postgres');
    return;
  }

  // Create tables
  console.log('\n3. Creating database tables...');
  try {
    await createTables();
    console.log('✅ Database tables created successfully');
  } catch (error) {
    console.log('❌ Error creating tables:', error);
    return;
  }

  // Test user creation
  console.log('\n4. Testing user creation...');
  try {
    const testUser = await db.one(`
      INSERT INTO users (auth0_id, firstname, lastname, email, username, role)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING user_id, email, username
    `, ['test|123', 'Test', 'User', 'test@example.com', 'testuser', 'user']);
    
    console.log('✅ User creation test successful:', testUser);
    
    // Clean up test user
    await db.none('DELETE FROM users WHERE email = $1', ['test@example.com']);
    console.log('✅ Test user cleaned up');
    
  } catch (error) {
    console.log('❌ User creation test failed:', error);
    return;
  }

  console.log('\n🎉 Backend setup verification complete!');
  console.log('\nNext steps:');
  console.log('1. Start the backend server: npm run dev');
  console.log('2. Test the API: npm run test-backend');
  console.log('3. Monitor users: npm run monitor-users');
}

verifySetup().catch(console.error); 