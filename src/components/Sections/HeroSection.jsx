import React from "react";

const HeroSection = () => {
  return (
    <div className="relative w-[100vw] min-h-[100vh] flex items-center justify-center px-[20px] ">
      <div className=" mt-[100px] w-[80%] h-full flex items-center gap-[20px] justify-center">
        <div className="z-10 w-1/2 h-full flex flex-col items-start justify-center">
          <div className="w-full flex flex-col gap-[20px] font-poppins">
            <h1 className="relative text-3xl font-bold font-montserrat border border-dashed border-primaryBlue p-[20px]">
              Capture Moments, Create <br /> Memories
              <span className="absolute top-0 left-0 w-[10px] h-[10px] bg-primaryBlue " />
              <span className="absolute top-0 right-0 w-[10px] h-[10px] bg-primaryBlue " />
              <span className="absolute bottom-0 left-0 w-[10px] h-[10px] bg-primaryBlue " />
              <span className="absolute bottom-0 right-0 w-[10px] h-[10px] bg-primaryBlue " />
            </h1>

            <p className="">
              Welcome to Picture Squad Studio, where every click tells a story. Explore our diverse range of photography sessions and packages, and let us help you capture the moments that matter most.
            </p>

            <div className="flex items-center gap-[20px]">
              <button className="bg-primaryBlue px-[20px] py-[8px] rounded-[25px] text-white text-lg font-bold tracking-wider">
                Book Session
              </button>
              <button className="bg-white border px-[20px] py-[8px] rounded-[25px] text-black text-lg font-bold tracking-wider">
                View Portfolio
              </button>
            </div>
          </div>
        </div>

        <div className="z-10 w-1/2 opacity-[90%] h-full flex flex-col items-end justify-center">
          <img src="/photography.jpg" alt="heroImage" className="w-[300px] h-[400px] rounded-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
