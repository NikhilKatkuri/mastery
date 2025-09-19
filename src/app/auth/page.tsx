import React from "react";

function page() {
  return (
    <div className="text-foreground relative flex h-screen items-center-safe justify-center-safe">
      <div className="absolute top-0 left-0 h-full w-full bg-[url('/image-gallery/view-ancient-roman-empire-architecture.png')] bg-cover bg-center bg-no-repeat opacity-5"></div>
      <h1 className="text-3xl font-bold">Auth Page</h1>
    </div>
  );
}

export default page;
