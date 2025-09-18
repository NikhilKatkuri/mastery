import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <header className="py-2 px-4 text-foreground  sticky top-0 flex items-centerbg-navbar-bg border-b-1 border-border-02 justify-between w-full">
      <div className="w-full max-w-[1024px] mx-auto  flex items-center  ">
        <div className="flex items-center gap-3 ">
          <Link
            href="/"
            className="flex items-center  justify-center gap-1.5 text-primary-foreground font-semibold"
          >
            <p className="pt-1.5 font-semibold text-md tracking-tighter">
              Mastery
            </p>
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-3 md:hidden">
        <button className="transition-medium hover:bg-level-02 p-2 rounded-full active:scale-95">
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
    </header>
  );
}

export default Navbar;
