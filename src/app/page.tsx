import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="font-inter h-screen overflow-scroll scrollbar-hide w-full  scroll-smooth   gap-3">
      <Navbar />
      <Hero/> 
    </div>
  );
}
