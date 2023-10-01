import React from "react";

const HeroSection = () => {
  return (
    <div className="relative min-h-[100vh] w-full ">
      <img src="./photography.jpg" alt="heroImage" className="w-full h-full object-cover" />
      {/* left overlay */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-black to-transparent" />
      {/* right overlay */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black to-transparent" />
    </div>
  );
};

export default HeroSection;
