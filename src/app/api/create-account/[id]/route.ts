import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs';
auth;

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { userId } = auth();
  if (!userId) {
    return new Response('Not Authenticated', {
      status: 400,
    });
  }
  const id = params.id;
  // const users = await db.user.findMany();
  console.log('route:id', id);
  return NextResponse.json(id);
}
