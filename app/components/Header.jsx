import Link from 'next/link';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
export default function Header() {
  return (
    <header className="container">
      <div className="flex justify-between  items-center h-[100px] font-mono">
        <button className="text-xl baseTransition hover:opacity-70 text-left w-[20%]">
          Menu
        </button>
        <Link href="/" className="logoStyles w-[60%] text-center">
          Recipes
        </Link>
        <div className="w-[20%] flex items-center justify-end">
          <SignedIn>
            <div className="flex items-center gap-5">
              <Link href="/new-recipe">Create Recipe</Link>
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
