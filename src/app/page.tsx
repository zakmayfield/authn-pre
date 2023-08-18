import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <main>
      <div>
        <UserButton afterSignOutUrl='/' />
      </div>
    </main>
  );
}
