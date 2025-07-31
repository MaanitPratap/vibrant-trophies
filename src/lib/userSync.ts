import { useUser } from '@auth0/nextjs-auth0/client';
import { useEffect, useState } from 'react';
import { apiCall } from './auth';

export interface UserSyncStatus {
  isSyncing: boolean;
  isSynced: boolean;
  error: string | null;
}

export const useUserSync = () => {
  const { user, isLoading } = useUser();
  const [syncStatus, setSyncStatus] = useState<UserSyncStatus>({
    isSyncing: false,
    isSynced: false,
    error: null
  });

  useEffect(() => {
    const syncUser = async () => {
      if (!user || isLoading) return;

      setSyncStatus(prev => ({ ...prev, isSyncing: true, error: null }));

      try {
        console.log('🔄 Syncing user to database:', user.email);

        // Check if user already exists
        const checkResponse = await apiCall(`/api/users/email/${encodeURIComponent(user.email || '')}`);
        
        if (checkResponse.ok) {
          console.log('✅ User already exists in database');
          setSyncStatus({ isSyncing: false, isSynced: true, error: null });
          return;
        }

        // Create new user
        const createResponse = await apiCall('/api/users', {
          method: 'POST',
          body: JSON.stringify({
            auth0_id: user.sub,
            firstname: user.given_name || user.name?.split(' ')[0] || '',
            lastname: user.family_name || user.name?.split(' ').slice(1).join(' ') || '',
            email: user.email || '',
            username: user.nickname || user.email?.split('@')[0] || '',
            role: 'user',
            image_src: user.picture,
            is_active: true,
            email_verified: user.email_verified || false
          })
        });

        if (createResponse.ok) {
          const createdUser = await createResponse.json();
          console.log('✅ User created successfully in database:', createdUser);
          setSyncStatus({ isSyncing: false, isSynced: true, error: null });
        } else {
          const errorData = await createResponse.json();
          throw new Error(errorData.error || 'Failed to create user');
        }

      } catch (error) {
        console.error('❌ Error syncing user:', error);
        setSyncStatus({
          isSyncing: false,
          isSynced: false,
          error: error instanceof Error ? error.message : 'Unknown error'
        });
      }
    };

    syncUser();
  }, [user, isLoading]);

  return { syncStatus };
}; 