import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <header className="text-foreground bg-navbar-bg border-border-02 sticky top-0 z-30 flex h-14 w-full items-center justify-between border-b-1 px-6 py-2.5 backdrop-blur-3xl">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="text-primary-foreground flex items-center justify-center gap-1.5 font-semibold"
          >
            <p className="text-md pt-1.5 font-semibold tracking-tighter">
              Mastery
            </p>
          </Link>
        </div>
        <div className="flex items-center gap-3 md:hidden">
          <button className="transition-medium hover:bg-level-02 rounded-full p-2 active:scale-95">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
