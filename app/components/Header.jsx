'use client';
import Link from 'next/link';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { useState } from 'react';

export default function Header() {
  const [showNav, setShowNav] = useState(false);

  return (
    <header className="container">
      <nav
        className="fixed top-0 h-screen w-full max-w-[350px] bg-teal z-40 flex justify-center items-center flex-col gap-5 baseTransition"
        style={{ left: showNav ? '0' : '-350px' }}
      >
        <button
          className="absolute top-5 right-5"
          onClick={() => setShowNav(false)}
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
              fill="#000"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <Link
          className="text-black text-4xl font-mono"
          href="/"
          onClick={() => setShowNav(false)}
        >
          Home
        </Link>
        <Link
          className="text-black text-4xl font-mono"
          href="/recipes"
          onClick={() => setShowNav(false)}
        >
          Recipes
        </Link>
        <Link
          className="text-black text-4xl font-mono"
          href="/new-recipe"
          onClick={() => setShowNav(false)}
        >
          Create Recipe
        </Link>
        <SignedOut>
          <Link
            className="text-black text-4xl font-mono mt-10"
            href="/sign-in"
            onClick={() => setShowNav(false)}
          >
            Sign In
          </Link>
        </SignedOut>
      </nav>
      <div className="flex justify-between  items-center h-[100px] font-mono">
        <button
          className="text-xl baseTransition hover:opacity-70 text-left w-[35%]"
          onClick={() => setShowNav(true)}
        >
          Menu
        </button>
        <Link href="/" className="logoStyles w-[30%] text-center whitespace-nowrap">
          Recipes
        </Link>
        <div className="w-[35%] flex items-center justify-end">
          <SignedIn>
            <div className="flex items-center gap-5">
              <Link href="/new-recipe" className='hidden md:block'>Create Recipe</Link>
              <UserButton />
            </div>
          </SignedIn>
          <SignedOut>
            <Link
              className="text-xl baseTransition hover:opacity-70"
              href="/sign-in"
            >
              Sign In
            </Link>
          </SignedOut>
        </div>
      </div>
    </header>
  );
}
