"use client";

import React, { useState } from "react";
import Link from "next/link";

function AuthPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="text-foreground bg-background font-inter relative flex h-screen items-center justify-center p-2 max-md:py-6 md:p-6">
      <div className="z-10 mx-auto flex h-full w-full items-center gap-4">
        {/* Background Image */}
        <div className="hidden h-full w-full overflow-hidden rounded-xl md:block">
          <div className="top-0 left-0 h-full w-full bg-[url('/image-gallery/aesthetic-anime-character-gaming.png')] bg-cover bg-center bg-no-repeat "></div>
        </div>

        {/* Auth Form */}
        <div className="bg-level-01/90 border-level-04 mx-auto flex h-full w-full max-w-[450px] flex-col items-center justify-center rounded-2xl border-2 p-4 md:p-8 shadow-2xl backdrop-blur-md max-md:h-auto max-md:min-h-[500px]">
          {/* Header */}
          <div className="mb-8 flex flex-col gap-6 text-center">
            <Link
              href="/"
              className="text-primary-foreground text-2xl font-bold tracking-tight"
            >
              Mastery
            </Link>
            <p className="text-tertiary-foreground text-sm">
              Welcome back! Sign in to continue your coding journey
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <div>
              <label className="text-secondary-foreground mb-2 block text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="bg-level-02 border-border-03 text-primary-foreground placeholder-tertiary-foreground focus:ring-primary w-full rounded-lg border px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="text-secondary-foreground mb-2 block text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="bg-level-02 border-border-03 text-primary-foreground placeholder-tertiary-foreground focus:ring-primary w-full rounded-lg border px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:outline-none"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="bg-primary hover:bg-primary/90 mt-6 w-full rounded-lg px-4 py-3 font-medium text-white transition-all duration-200 hover:shadow-lg active:scale-[0.98]"
            >
              Sign In
            </button>
          </form>
            <button
              type="button"
              className="text-primary hover:text-primary-text text-sm transition-colors text-center mt-4"
            >
              Forgot password?
            </button>

          {/* Divider */}
          <div className="my-6 flex w-full items-center">
            <div className="bg-border-03 h-px flex-1"></div>
            <span className="text-tertiary-foreground px-4 text-sm">
              Or continue with
            </span>
            <div className="bg-border-03 h-px flex-1"></div>
          </div>

          {/* Social Login */}
          <div className="flex w-full gap-3">
            <button className="bg-level-02 border-border-03 text-tertiary-foreground hover:text-primary-foreground hover:bg-level-03 flex flex-1 items-center justify-center gap-2 rounded-lg border px-4 py-3 transition-all duration-200">
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Google
            </button>

            <button className="bg-level-02 border-border-03 text-tertiary-foreground hover:text-primary-foreground hover:bg-level-03 flex flex-1 items-center justify-center gap-2 rounded-lg border px-4 py-3 transition-all duration-200">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </button>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-tertiary-foreground mb-3 text-xs">
              By continuing, you agree to our{" "}
              <Link
                href="/terms"
                className="text-primary hover:text-primary-text transition-colors"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="text-primary hover:text-primary-text transition-colors"
              >
                Privacy Policy
              </Link>
            </p>
            <p className="text-tertiary-foreground text-sm">
              Don&apos;t have an account?{" "}
              <Link
                href="/auth/signup"
                prefetch={false}
                className="text-primary hover:text-primary-text font-medium transition-colors"
              >
                Sign up here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
