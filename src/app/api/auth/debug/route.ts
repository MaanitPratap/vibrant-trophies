import { getSession } from '@auth0/nextjs-auth0';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  try {
    const session = await getSession(request, NextResponse.next());
    
    return NextResponse.json({ 
      session: session ? {
        user: session.user,
        accessToken: session.accessToken ? 'Present' : 'Missing',
        idToken: session.idToken ? 'Present' : 'Missing',
        refreshToken: session.refreshToken ? 'Present' : 'Missing',
        expiresAt: session.expiresAt
      } : null
    }, { status: 200 });
  } catch (error) {
    console.error('Error in debug endpoint:', error);
    return NextResponse.json({ error: 'Debug endpoint error' }, { status: 500 });
  }
} 