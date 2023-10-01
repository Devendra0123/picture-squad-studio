import React from "react";

const TrendingSession = () => {
  return (
    <div className="w-[90%] h-full flex flex-col lg:flex-row items-center gap-[30px] mt-[70px]">
      <div
        style={{
          background: "rgba(255, 255, 255, 0.6)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
        }}
        className="w-full lg:w-1/2 flex flex-col gap-[20px] items-center p-[20px] rounded-xl "
      >
        <h1 className="font-brunoAce text-xl font-bold tracking-[2px]">
          Trending Session
        </h1>
        <div className="w-full flex items-center justify-center gap-[20px] flex-wrap">
          <img
            src="./image1.jpg"
            alt="image1"
            className="w-[250px] h-[350px] rounded-xl object-cover "
          />
          <img
            src="./image3.jpg"
            alt="image1"
            className="w-[250px] h-[350px] rounded-xl object-cover "
          />
        </div>
        <button className="bg-primaryBlue px-[20px] py-[12px] rounded-[4px] text-white font-brunoAce tracking-[1.5px] text-lg ">
          Book Now
        </button>
      </div>

      <div className="w-full lg:w-1/2 h-full p-[20px] rounded-xl flex flex-col gap-[30px] ">
        {/* special offer bannner */}
        <div
          style={{
            background: "rgba(255, 255, 255, 0.6)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(5px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
          className="w-full h-[200px] flex items-center justify-center rounded-xl "
        >
          <p className="font-pacifico text-lg">Banner of special offer</p>
        </div>
        {/* upcoming session bannner */}
        <div
          style={{
            background: "rgba(255, 255, 255, 0.6)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(5px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
          className="w-full h-[200px] flex items-center justify-center rounded-xl "
        >
          <p className="font-pacifico text-lg">Banner of upcoming offer</p>
        </div>
      </div>
    </div>
  );
};

export default TrendingSession;
