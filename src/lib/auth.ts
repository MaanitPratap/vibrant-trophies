import { getSession } from '@auth0/nextjs-auth0';
import { NextRequest } from 'next/server';

export interface AuthResponse {
  accessToken?: string;
  error?: string;
}

export const getToken = async (): Promise<string | null> => {
  try {
    const tokenResponse = await fetch('/api/auth/access-token');
    const tokenData: AuthResponse = await tokenResponse.json();
  
    if (!tokenData.accessToken) {
      console.error('Access token not found');
      return null;
    }
  
    console.log('Retrieved token:', tokenData.accessToken.substring(0, 20) + '...'); // Debug log
    return tokenData.accessToken;
  } catch (error) {
    console.error('Error fetching token:', error);
    return null;
  }
};

export const apiCall = async (endpoint: string, options: RequestInit = {}) => {
  const accessToken = await getToken();
  
  const defaultOptions: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
      ...options.headers,
    },
    ...options,
  };

  console.log('Making API call to:', `${process.env.NEXT_PUBLIC_BACKEND_URL}${endpoint}`); // Debug log
  console.log('Headers:', defaultOptions.headers); // Debug log

  return fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}${endpoint}`, defaultOptions);
};

export const fetchAccount = async (request: NextRequest) => {
  try {
    const session = await getSession(request);
    if (!session?.user) {
      throw new Error('No user session found');
    }
    return session.user;
  } catch (error) {
    console.error('Error fetching account:', error);
    throw error;
  }
};

export const isAuthenticated = async (request: NextRequest): Promise<boolean> => {
  try {
    const session = await getSession(request);
    return !!session?.user;
  } catch (error) {
    return false;
  }
}; 