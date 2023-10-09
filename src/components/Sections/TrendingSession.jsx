import React from "react";

const TrendingSession = () => {
  return (
    <div className="trendingSession w-[80%] h-full flex flex-col items-center gap-[30px] mt-[70px]">
      <div
        style={{
          background: "rgba(255, 255, 255, 0.6)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
        }}
        className="w-full flex flex-col gap-[20px] items-center p-[20px] rounded-xl "
      >
        <h1 className="font-brunoAce text-xl font-bold tracking-[2px]">
          Trending Session
        </h1>
        <div className="w-full flex items-center justify-center gap-[30px]">
          <img
            src="./image1.jpg"
            alt="image1"
            className="w-1/2 h-[350px] rounded-xl object-cover "
          />
          <img
            src="./image3.jpg"
            alt="image1"
            className="w-1/2 h-[350px] rounded-xl object-cover "
          />
        </div>
        <button className="bg-primaryBlue px-[20px] py-[12px] rounded-[4px] text-white font-brunoAce tracking-[1.5px] text-lg ">
          Book Now
        </button>
      </div>

      <div className="w-full h-full p-[20px] rounded-xl flex flex-col gap-[30px] ">
        {/* special offer bannner */}
        <div
          style={{
            background: "rgba(255, 255, 255, 0.6)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(5px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
          className="relative w-full h-[200px] flex items-center justify-center rounded-xl "
        >
          <img src="/photography.jpg" alt="banner" className="w-full h-full object-cover" />
          <p className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] bg-gradient-to-r from-primaryBlue/75 to-primaryRed/75 p-[20px] font-pacifico text-lg">Banner of special offer</p>
        </div>
        {/* upcoming session bannner */}
        <div
          style={{
            background: "rgba(255, 255, 255, 0.6)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(5px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
          className="relative w-full h-[200px] flex items-center justify-center rounded-xl "
        >
           <img src="/photography2.jpg" alt="banner" className="w-full h-full object-cover" />
          <p className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] bg-gradient-to-r from-primaryBlue/75 to-primaryRed/75 p-[20px] font-pacifico text-lg">Banner of upcoming offer</p>
        </div>
      </div>
    </div>
  );
};

export default TrendingSession;
