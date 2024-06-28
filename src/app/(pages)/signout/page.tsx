"use client";

import { useEffect } from 'react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    const handleSignOut = async () => {
      try {
        await signOut({ redirect: false });
        console.log("User Logged out")
        router.push('/');
      } catch (error) {
        console.error('Error signing out:', error);
      }
    };

    handleSignOut();
  }, [router]);

  return (
    <div className="bg-dark h-screen text-white py-28">
      <p className='text-5xl text-center'>Signing out...</p>
    </div>
  );
}