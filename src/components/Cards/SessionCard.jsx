import React from "react";

const SessionCard = ({ title, image }) => {
  return (
    <div className="group relative w-[300px] h-[300px] rounded-xl overflow-hidden shadow-md shadow-primaryBlue ">
      <img
        src={image}
        alt="sessionImage"
        className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover"
      />
      <p className="absolute bottom-0 w-full bg-gradient-to-r from-black to-transparent text-white p-[15px] font-montserrat text-lg font-bold tracking-[1.5px]">
        {title}
      </p>
      <div className="absolute w-full h-full flex items-center justify-end rounded-full bg-white/75 left-0 bottom-0 transform -translate-x-[100%] translate-y-[100%] group-hover:-translate-x-[20%] group-hover:translate-y-[20%] transition duration-150 ease-out" />
      <button className="hidden group-hover:block absolute bottom-[20px] left-[20px] px-[20px] py-[12px] rounded-[4px] border border-primaryBlue bg-primaryBlue font-brunoAce tracking-[1.5px] hover:bg-transparent hover:border hover:border-black transition duration-150 ease-out ">
        Book Now
      </button>

    </div>
  );
};

export default SessionCard;
