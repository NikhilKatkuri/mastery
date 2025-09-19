import React from "react";

function Footer() {
  return (
    <footer className="border-border-02 text-foreground bg-background mt-12 flex w-full flex-col border-t-2 px-4 py-12">
      <div className="mx-auto my-4 flex h-auto w-full max-w-6xl flex-wrap items-center justify-items-start gap-6 md:justify-between">
        <div className="flex flex-col items-start justify-items-start">
          <p className="text-primary-foreground/80 text-lg tracking-tight">
            Mastery
          </p>
          <p className="mt-2 max-w-md text-sm">
            Mastery is your go-to platform for mastering coding skills with
          </p>
          <p className="mt-2 max-w-md text-sm">
            &copy; {new Date().getFullYear()} Mastery. All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap items-start gap-6">
          <div className="flex h-full flex-col items-start justify-self-start">
            <h1 className="text-primary-foreground/80 mb-4">Connect</h1>
            <div className="flex flex-col space-y-1 text-sm">
              <p className="text-tertiary-foreground transition-medium hover:text-primary-foreground cursor-pointer font-medium">
                Linkedin
              </p>
              <p className="text-tertiary-foreground transition-medium hover:text-primary-foreground cursor-pointer font-medium">
                Twitter
              </p>
              <p className="text-tertiary-foreground transition-medium hover:text-primary-foreground cursor-pointer font-medium">
                Github
              </p>
            </div>
          </div>
          <div className="flex h-full flex-col items-start justify-self-start">
            <h1 className="text-primary-foreground/80 mb-4">Connect</h1>
            <div className="flex flex-col space-y-1 text-sm">
              <p className="text-tertiary-foreground transition-medium hover:text-primary-foreground cursor-pointer font-medium">
                Linkedin
              </p>
              <p className="text-tertiary-foreground transition-medium hover:text-primary-foreground cursor-pointer font-medium">
                Twitter
              </p>
              <p className="text-tertiary-foreground transition-medium hover:text-primary-foreground cursor-pointer font-medium">
                Github
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
