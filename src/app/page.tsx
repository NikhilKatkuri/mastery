import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="h-screen overflow-scroll scrollbar-hide w-full    gap-3">
      <Navbar />
      <div className="min-h-screen w-full relative overflow-x-hidden ">
        <div className="h-[140vh] w-screen flex items-end  md:items-end justify-end">
          <div className="h-screen w-[200%] md:w-screen absolute bg-level-04/5 rounded-xl border-t-2 border-l-2 border-border-04 three-d mask">
          <div className="w-full h-full mask"></div>
          <div className="w-full h-full absolute bottom-0 left-0 bg-gradient-to-b from-white/0 to-background "></div>
           </div>
        </div>
      </div>
      <div className="h-screen w-full"></div>
    </div>
  );
}
