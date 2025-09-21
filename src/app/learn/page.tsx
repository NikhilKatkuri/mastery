import Navbar from '@/components/Navbar'
import React from 'react'

const LearnPage = () => {
  return (
    <div className="scrollbar-hide h-screen w-full overflow-y-auto">
      <Navbar />
      <section className="bg-background flex h-[calc(100vh-4rem)] w-full items-center">
        <aside className="bg-background max-md:fixed max-md:top-16 max-md:h-screen w-64 max-md:z-10 border-r border-foreground/20 md:relative md:h-full"></aside>
      </section>
    </div>
  );
}

export default LearnPage