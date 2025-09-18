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
    <section className="h-[120vh] overflow-hidden w-full relative overflow-x-hidden ">
      <div className="h-[140vh] md:h-[165vh] w-screen flex items-end md:justify-end relative">
        <div className="h-screen z-0 w-[1024px]  md:w-screen absolute bg-level-04/5 rounded-xl border-t-2 border-l-2 border-border-04 three-d mask">
          <div className="w-full h-full mask"></div>
          <div className="w-full h-full absolute bottom-0 left-0 bg-gradient-to-b from-white/0 to-background/90"></div>
        </div>

        <div className="h-full z-[2] w-full max-lg:px-6 max-w-4xl lg:max-w-5xl mx-auto pt-24 md:pt-26">
          <p className="text-4xl md:text-6xl font-normal text-primary-foreground tracking-tight leading-tight max-w-5xl flex flex-wrap gap-[1%] ">
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

          <p className="my-3 md:my-4 text-tertiary-foreground max-w-md flex flex-wrap gap-[1%]">
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
              className=" heading-animation px-4.5 py-2 text-sm bg-primary-foreground/90 hover:bg-primary-foreground text-black font-medium rounded-md  transition-medium active:scale-95"
            >
              Start learning
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
