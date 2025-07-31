import db from '../src/database/database';

async function monitorUsers() {
  console.log('🔍 Monitoring user creation in database...');
  console.log('Press Ctrl+C to stop monitoring\n');

  let lastCount = 0;

  const checkUsers = async () => {
    try {
      const result = await db.one('SELECT COUNT(*) as count FROM users');
      const currentCount = parseInt(result.count);
      
      if (currentCount > lastCount) {
        console.log(`✅ New user(s) detected! Total users: ${currentCount}`);
        
        // Get the latest users
        const latestUsers = await db.many(`
          SELECT user_id, auth0_id, firstname, lastname, email, username, creation_time 
          FROM users 
          ORDER BY creation_time DESC 
          LIMIT 5
        `);
        
        console.log('📋 Latest users:');
        latestUsers.forEach((user: any) => {
          console.log(`  - ${user.firstname} ${user.lastname} (${user.email}) - Created: ${user.creation_time}`);
        });
        console.log('');
      }
      
      lastCount = currentCount;
    } catch (error) {
      console.error('❌ Error checking users:', error);
    }
  };

  // Check immediately
  await checkUsers();
  
  // Check every 2 seconds
  setInterval(checkUsers, 2000);
}

monitorUsers().catch(console.error); 