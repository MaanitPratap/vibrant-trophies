import db from '../src/database/database';

async function checkUsers() {
  try {
    console.log('📊 Current users in database:\n');
    
    // Get total count
    const countResult = await db.one('SELECT COUNT(*) as count FROM users');
    console.log(`Total users: ${countResult.count}\n`);
    
    if (parseInt(countResult.count) > 0) {
      // Get all users with details
      const users = await db.many(`
        SELECT 
          user_id,
          auth0_id,
          firstname,
          lastname,
          email,
          username,
          role,
          is_active,
          email_verified,
          last_login,
          creation_time,
          updated_at
        FROM users 
        ORDER BY creation_time DESC
      `);
      
      console.log('📋 User details:');
      users.forEach((user: any, index: number) => {
        console.log(`\n${index + 1}. ${user.firstname} ${user.lastname}`);
        console.log(`   Email: ${user.email}`);
        console.log(`   Username: ${user.username}`);
        console.log(`   Auth0 ID: ${user.auth0_id || 'Not set'}`);
        console.log(`   Role: ${user.role}`);
        console.log(`   Active: ${user.is_active ? 'Yes' : 'No'}`);
        console.log(`   Email Verified: ${user.email_verified ? 'Yes' : 'No'}`);
        console.log(`   Created: ${user.creation_time}`);
        console.log(`   Last Login: ${user.last_login || 'Never'}`);
        console.log(`   Updated: ${user.updated_at}`);
      });
    } else {
      console.log('No users found in database.');
    }
    
  } catch (error) {
    console.error('❌ Error checking users:', error);
  } finally {
    await db.$pool.end();
  }
}

checkUsers(); 