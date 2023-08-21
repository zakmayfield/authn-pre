import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(req: NextRequest, res: NextResponse) {
  return NextResponse.json({ message: 'Welcome' });
}
