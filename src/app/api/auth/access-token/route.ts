import { getSession } from '@auth0/nextjs-auth0';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  try {
    const session = await getSession(request, NextResponse.next());
    console.log('Session:', session); // Debug log
    
    if (!session) {
      return NextResponse.json({ error: 'No session found' }, { status: 401 });
    }
    
    // Use ID token instead of access token since Auth0 by default only provides ID tokens
    const token = session.idToken || session.accessToken;
    
    if (!token) {
      return NextResponse.json({ error: 'No token found in session' }, { status: 401 });
    }
    
    return NextResponse.json({ accessToken: token }, { status: 200 });
  } catch (error) {
    console.error('Error fetching access token:', error);
    return NextResponse.json({ error: 'Unable to retrieve access token' }, { status: 500 });
  }
}

export const POST = GET;