"use client";

import GameBar from "@/components/(try)/GameBar";
import { use, useEffect, useRef, useState } from "react";

const LearnPage = () => {
  // refs
  const useHorizontalRef = useRef<HTMLDivElement | null>(null);
  const useVerticalRef = useRef<HTMLDivElement | null>(null);
  const useContainerRef = useRef<HTMLDivElement | null>(null);

  // states
  const [isResizingVertical, setIsResizingVertical] = useState(false);
  const [isResizingHorizontal, setIsResizingHorizontal] = useState(false);

  // diemension hooks
  const [LeftBarWidth, setLeftBarWidth] = useState(500);
  const [TopRightBarWidth, setTopRightBarWidth] = useState(200);

  useEffect(() => {
    function updateDimensions() {
      if (useContainerRef.current) {
        const containerWidth = useContainerRef.current.offsetWidth;
        const containerHeight = useContainerRef.current.offsetHeight;
        setLeftBarWidth(containerWidth * 0.5 - 16); // 50% of container width
        setTopRightBarWidth(containerHeight * 0.4 - 16); // 40% of container height
      }
    }
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  // resize effects
  useEffect(() => {
    if (!useHorizontalRef.current) return;
    const handleMouseMove = (e: MouseEvent) => {
      if (!useContainerRef.current || !isResizingHorizontal) return;
      const containerReact = useContainerRef.current.getBoundingClientRect();
      const min = containerReact.width * 0.4;
      const max = containerReact.width * 0.7;
      const newWidth = Math.min(
        Math.max(e.clientX - containerReact.left, min),
        max
      );
      setLeftBarWidth(newWidth);
    };
    const handleMouseUp = () => setIsResizingHorizontal(false);

    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isResizingHorizontal]);

  useEffect(() => {
    if (!useVerticalRef.current) return;
    const handleMouseMove = (e: MouseEvent) => {
      if (!useContainerRef.current || !isResizingVertical) return;
      const containerReact = useContainerRef.current.getBoundingClientRect();
      const min = containerReact.height * 0.1;
      const max = containerReact.height * 0.85;
      const newHeight = Math.min(
        Math.max(e.clientY - containerReact.top, min),
        max
      );
      setTopRightBarWidth(newHeight);
    };
    const handleMouseUp = () => setIsResizingVertical(false);

    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isResizingVertical]);

  return (
    <div className="scrollbar-hide relative h-screen w-full overflow-y-auto">
      <div className="absolute inset-0 z-0 h-full w-full bg-[url('/image-gallery/view-ancient-roman-empire-architecture.png')] bg-cover bg-center opacity-20"></div>
      <section
        ref={useContainerRef}
        style={{
          gridTemplateColumns: `${LeftBarWidth}px 4px 1fr`,
          gridTemplateRows: `${TopRightBarWidth}px 4px 1fr`,
        }}
        className="grid-row-2 relative z-10 grid h-full w-full flex-1 grid-cols-[auto_4px_auto] grid-rows-[auto_4px_auto] overflow-hidden p-3 max-md:hidden"
      >
        <div className="bg-background/50 col-span-1 row-span-3 h-full w-full rounded-xl">
          <GameBar />
        </div>
        <div
          ref={useHorizontalRef}
          onMouseDown={() => setIsResizingHorizontal(true)}
          className="col-span-1 row-span-3 h-full w-[3px] cursor-ew-resize bg-sky-700 opacity-0 hover:opacity-100"
        />
        <div className="bg-background/50 col-span-1 row-span-1 h-full w-full rounded-xl"></div>
        <div
          ref={useVerticalRef}
          onMouseDown={() => setIsResizingVertical(true)}
          className="row-span-1 h-[3px] w-full cursor-ns-resize bg-sky-700 opacity-0 hover:opacity-100"
        />
        <div className="bg-background/50 col-span-1 row-span-1 h-full w-full rounded-xl"></div>
      </section>
      <section className="z-10 h-screen bg-black/50 md:hidden">
        <GameBar />
      </section>
    </div>
  );
};

export default LearnPage;
