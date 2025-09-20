"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function Navbar() {
  const router = useRouter();
  return (
    <header className="text-foreground bg-navbar-bg border-border-02 sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b-1 px-6 backdrop-blur-3xl">
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
        <div className="hidden h-full md:flex md:items-center md:gap-4">
          <div className="flex items-center gap-4 text-sm font-normal">
            <Link
              href="/"
              className="text-foreground/60 hover:text-primary-foreground transition-medium hover:bg-level-02 rounded-md px-3 py-1.5"
            >
              Learn
            </Link>
            <Link
              href="/"
              className="text-foreground/60 hover:text-primary-foreground transition-medium hover:bg-level-02 rounded-md px-3 py-1.5"
            >
              Practice
            </Link>
            <Link
              href="/"
              className="text-foreground/60 hover:text-primary-foreground transition-medium hover:bg-level-02 rounded-md px-3 py-1.5"
            >
              Games
            </Link>
            <Link
              href="/"
              className="text-foreground/60 hover:text-primary-foreground transition-medium hover:bg-level-02 rounded-md px-3 py-1.5"
            >
              Resources
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-1">
          {" "}
          <button
            onClick={() => {
              router.push("/auth/signup");
            }}
            className="hover:bg-level-04 text-primary-foreground/30 transition-medium mr-1 h-7 rounded-md px-3 text-sm font-medium"
          >
            Sign up
          </button>
          <button
            onClick={() => {
              router.push("/auth");
            }}
            className="transition-medium h-7 rounded-md bg-white/80 px-3 text-sm font-medium text-black hover:bg-white"
          >
            login
          </button>
          <button className="transition-medium hover:bg-level-02 ml-2 rounded-full p-2 active:scale-95 md:hidden">
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
