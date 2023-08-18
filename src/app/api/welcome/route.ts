import { NextRequest, NextResponse } from 'next/server';

// maybe my /welcome route can hit /api/welcome and update the db with user info here

export async function GET(req: NextRequest, res: NextResponse) {
  return NextResponse.json({ test: 'hello there. general kenobi.' });
}
