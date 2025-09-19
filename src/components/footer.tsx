import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-border-02 text-foreground bg-background mt-12 flex w-full flex-col border-t-2 px-4 py-12">
      <div className="mx-auto my-4 flex h-auto w-full max-w-6xl flex-wrap justify-between gap-12">
        <div className="flex max-w-sm flex-col items-start">
          <h2 className="text-primary-foreground/80 text-xl font-bold tracking-tight">
            Mastery
          </h2>
          <p className="text-tertiary-foreground mt-2 text-sm">
            Mastery is your go-to platform to master coding from beginner to
            advanced - through challenges, games, projects, and interview prep.
          </p>
          <p className="text-tertiary-foreground mt-4 text-xs">
            &copy; {currentYear} Mastery. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap gap-12 text-sm">
          <div className="flex flex-col space-y-2">
            <h3 className="text-primary-foreground/80 mb-2 font-semibold">
              Learn
            </h3>
            <p className="hover:text-primary-foreground cursor-pointer transition">
              Getting Started
            </p>
            <p className="hover:text-primary-foreground cursor-pointer transition">
              Data Structures
            </p>
            <p className="hover:text-primary-foreground cursor-pointer transition">
              Algorithms
            </p>
            <p className="hover:text-primary-foreground cursor-pointer transition">
              System Design
            </p>
            <p className="hover:text-primary-foreground cursor-pointer transition">
              Theory Notes
            </p>
          </div>

          <div className="flex flex-col space-y-2">
            <h3 className="text-primary-foreground/80 mb-2 font-semibold">
              Practice
            </h3>
            <p className="hover:text-primary-foreground cursor-pointer transition">
              Daily Problems
            </p>
            <p className="hover:text-primary-foreground cursor-pointer transition">
              Contests
            </p>
            <p className="hover:text-primary-foreground cursor-pointer transition">
              Code Games
            </p>
            <p className="hover:text-primary-foreground cursor-pointer transition">
              Debugging Arena
            </p>
            <p className="hover:text-primary-foreground cursor-pointer transition">
              Project Challenges
            </p>
          </div>

          <div className="flex flex-col space-y-2">
            <h3 className="text-primary-foreground/80 mb-2 font-semibold">
              Resources
            </h3>
            <p className="hover:text-primary-foreground cursor-pointer transition">
              Docs & Guides
            </p>
            <p className="hover:text-primary-foreground cursor-pointer transition">
              Cheat Sheets
            </p>
            <p className="hover:text-primary-foreground cursor-pointer transition">
              Templates
            </p>
            <p className="hover:text-primary-foreground cursor-pointer transition">
              Blog / Articles
            </p>
            <p className="hover:text-primary-foreground cursor-pointer transition">
              Roadmaps
            </p>
          </div>

          <div className="flex flex-col space-y-2">
            <h3 className="text-primary-foreground/80 mb-2 font-semibold">
              Connect
            </h3>
            <p className="hover:text-primary-foreground cursor-pointer transition">
              LinkedIn
            </p>
            <p className="hover:text-primary-foreground cursor-pointer transition">
              Twitter
            </p>
            <p className="hover:text-primary-foreground cursor-pointer transition">
              GitHub
            </p>
            <p className="hover:text-primary-foreground cursor-pointer transition">
              Discord
            </p>
            <p className="hover:text-primary-foreground cursor-pointer transition">
              YouTube
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
