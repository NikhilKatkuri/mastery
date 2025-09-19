import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  console.log();
  const code: string = `<span class="text-green-700">// Great things start small 🌱</span>
<span class="text-blue-900">const</span> <span class="text-blue-700">dream</span> = <span class="text-orange-500">"Build something meaningful"</span>;

<span class="text-blue-900">function</span> <span class="text-purple-900">build</span><span class="text-accent-yellow">(</span><span class="text-purple-700">dream</span><span class="text-accent-yellow">)</span> <span class="text-accent-yellow">{</span>
  <span class="text-blue-900">let</span> <span class="text-blue-700">progress</span> = <span class="text-white/80">0</span>;
  <span class="text-blue-900">while</span>(<span class="text-blue-700">progress</span> < <span class="text-white/80">100</span>) {
    <span class="text-blue-700">progress</span><span class="text-white/80">++</span>;
    <span class="text-blue-300">console</span>.<span class="text-yellow-200">log</span>(<span class="text-orange-500">\`🚀 Progress: \${<span class="text-blue-700">progress</span>}%\`</span>);
  }
  <span class="text-blue-300">console</span>.<span class="text-yellow-200">log</span>(<span class="text-orange-500">\`✨ Mission Accomplished: \${<span class="text-blue-700">dream</span>}\`</span>);
<span class="text-accent-yellow">}</span>

<span class="text-purple-900">build</span>(<span class="text-purple-700">dream</span>);`;

  return (
    <div className="font-inter scrollbar-hide h-screen w-full gap-3 overflow-scroll scroll-smooth">
      <Navbar />
      <Hero />
      <section className="text-tertiary-foreground my-3 grid h-auto w-full items-center justify-center">
        <div className="mx-auto grid h-full w-full max-w-6xl items-center justify-center md:max-h-[500px] md:grid-cols-2">
          <div className="md:border-level-03/80 h-full w-full p-3 md:border-t md:border-r">
            <div className="flex flex-col items-start md:justify-center">
              <h1 className="text-primary-foreground max-w-2xl text-4xl leading-tight font-bold">
                Solve Any Problem , One Step at a Time
              </h1>
              <div className="text-primary-foreground/50 my-3 flex flex-col gap-3">
                <p className="text-secondary mt-4 text-sm">
                  Code is just logic in disguise. Break it down, and it will bow
                  down.
                </p>
                <div className="flex items-center gap-3">
                  <div className="bg-accent-lime h-6 w-1 rounded-md"></div>
                  <p className="flex items-center">
                    {" "}
                    <strong>Break it Down -</strong>{" "}
                    <span className="ml-1">Solve small chunks first.</span>
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-level-04 h-6 w-1 rounded-md"></div>
                  <p className="flex items-center">
                    {" "}
                    <strong>Understand Before You Write - </strong>
                    <span className="ml-1">Think through logic clearly.</span>
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-level-04 h-6 w-1 rounded-md"></div>
                  <p className="flex items-center">
                    {" "}
                    <strong>Iterate & Debug - </strong>
                    <span className="ml-1">Errors guide you to success.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:border-level-03/80 h-auto w-full p-3 max-md:max-w-[560px] md:border-t md:border-l">
            <div className="border-level-03 relative h-full w-full rounded-xl border-1">
              <div className="border-level-03 flex h-8 w-full items-center gap-2 border-b px-3 py-2 text-sm">
                <button className="transition-medium flex cursor-pointer items-center gap-3 opacity-80 hover:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="text-tertiary-foreground size-4 h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                    />
                  </svg>
                  <span className="font-semibold">Code</span>
                </button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>

                <span className="text-primary bg-level-01 rounded-md px-2 text-center text-xs font-medium tracking-wide">
                  build_inspire.js
                </span>
              </div>
              <pre className="bg-background/30 relative h-full w-full overflow-auto px-5 py-4 text-sm leading-relaxed">
                <code
                  className="font-mono"
                  dangerouslySetInnerHTML={{ __html: code }}
                ></code>
              </pre>
              <div className="from-background/20 to-background/60 absolute -bottom-3 left-0 h-36 w-full bg-gradient-to-b"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
