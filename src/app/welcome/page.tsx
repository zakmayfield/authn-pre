import { auth } from '@clerk/nextjs';

async function createAccount(userId: string | null) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/create-account/${userId}`
    );
    return response.json();
  } catch (error) {
    console.log('page:error', error);
  }
}

export default async function Welcome() {
  const { userId } = auth();
  console.log('page:userId', userId);
  const data = await createAccount(userId);

  console.log('page:data', data);

  return <div>Welcome</div>;
}
