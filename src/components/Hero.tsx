import React, { CSSProperties } from "react";

function Hero() {
  const heading: string[] = [
    "Mastery",
    "is",
    "a",
    "purpose-built",
    "platform",
    "for",
    "mastering",
    "data",
    "structures",
  ];
  const subheading: string[] = [
    "Gamify",
    "your",
    "journey,",
    "solve",
    "challenges,",
    "and",
    "build",
    "strong",
    "programming",
    "fundamentals.",
  ];

  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-x-hidden max-md:overflow-hidden">
      <div className="relative flex h-[140vh] w-screen items-end md:h-[165vh] md:justify-end">
        <div className="bg-level-04/5 border-border-04 three-d mask absolute z-0 h-screen w-[1024px] rounded-xl border-t-2 border-l-2 md:w-screen">
          <div className="mask h-full w-full"></div>
          <div className="to-background/90 absolute bottom-0 left-0 h-full w-full bg-gradient-to-b from-white/0"></div>
        </div>

        <div className="z-[2] flex h-full w-full flex-col items-center justify-between pb-3">
          <div className="mx-auto h-auto w-full max-w-4xl pt-24 max-lg:px-6 md:pt-26 lg:max-w-5xl">
            <p className="text-primary-foreground flex max-w-5xl flex-wrap gap-[1%] text-4xl leading-tight font-normal tracking-tight md:text-6xl">
              {heading.map((item, index) => {
                return (
                  <span
                    className="heading-animation"
                    key={index}
                    style={
                      {
                        "--index": index + "s",
                      } as CSSProperties
                    }
                  >
                    {item + " "}
                  </span>
                );
              })}
            </p>

            <p className="text-tertiary-foreground my-3 flex max-w-md flex-wrap gap-[1%] md:my-4">
              <span
                className="heading-animation text-primary-foreground"
                style={
                  {
                    "--index": heading.length * 1 + "s",
                  } as CSSProperties
                }
              >
                Meet the system for modern learning.
              </span>
              {subheading.map((item, index) => {
                return (
                  <span
                    className="heading-animation"
                    key={index}
                    style={
                      {
                        "--index": index + heading.length * 1.5 + "s",
                      } as CSSProperties
                    }
                  >
                    {item + " "}
                  </span>
                );
              })}
            </p>
            <div className="mt-3 flex items-center gap-3">
              <button
                style={
                  {
                    "--index": subheading.length + heading.length + "s",
                  } as CSSProperties
                }
                className="heading-animation bg-primary-foreground/90 hover:bg-primary-foreground transition-medium rounded-md px-4.5 py-2 text-sm font-medium text-black active:scale-95"
              >
                Start learning
              </button>
            </div>
          </div>
          <div className="flex min-w-full items-center justify-center px-4">
            <div className="mx-auto flex h-auto w-full max-w-xl flex-col items-center md:text-center">
              <p className="text-primary-foreground text-2xl leading-tight font-semibold tracking-tight">
                Powering the next generation of coders
              </p>
              <p className="text-foreground/70 mt-3 max-w-lg text-sm md:text-base">
                From curious beginners to skilled pros explore, learn, and build
                in{" "}
                <span className="text-primary-foreground/90">
                  5+ programming languages
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
