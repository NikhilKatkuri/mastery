import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="font-inter scrollbar-hide h-screen w-full gap-3 overflow-scroll scroll-smooth">
      <Navbar />
      <Hero />
      <section className="flex w-full flex-col items-center justify-center"></section>
    </div>
  );
}
