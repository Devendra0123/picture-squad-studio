import React from "react";

const HeroSection = () => {
  return (
    <div className="relative w-[100vw] min-h-[100vh] ">
      <img src="./photography.jpg" alt="heroImage" className="w-[100vw] h-[100vh] object-cover" />
      {/* left overlay */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-black to-transparent" />
      {/* right overlay */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black to-transparent" />
    </div>
  );
};

export default HeroSection;
