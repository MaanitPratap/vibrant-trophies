import fetch from 'node-fetch';

async function testBackend() {
  try {
    console.log('🔍 Testing backend server...');
    
    // Test basic connectivity
    const response = await fetch('http://localhost:3333/api/test');
    
    if (response.ok) {
      const data = await response.json();
      console.log('✅ Backend server is running and accessible');
      console.log('Response:', data);
    } else {
      console.log(`❌ Backend server responded with status: ${response.status}`);
    }
    
  } catch (error) {
    console.error('❌ Backend server is not accessible:', error);
    console.log('\n💡 Make sure to:');
    console.log('1. Create a .env file in the backend directory');
    console.log('2. Start the backend server: npm run dev');
    console.log('3. Start the database: docker-compose up -d postgres');
  }
}

testBackend(); 