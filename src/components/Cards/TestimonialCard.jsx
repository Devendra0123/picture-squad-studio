import React from "react";

const TestimonialCard = ({ data }) => {
  const { name, image, occupation, comment } = data;
  return (
    <div
      style={{
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
      }}
      className="bg-slate-300 rounded-[4px] p-[20px] shadow-lg shadow-gray-600 overflow-hidden"
    >
      <div className="flex items-center gap-[20px]">
        <img
          src={image}
          alt="personImage"
          className="w-[60px] h-[60px] rounded-full "
        />
        <div>
          <p>{name}</p>
          <p className="font-brunoAce text-lg font-bold">{occupation}</p>
        </div>
      </div>

      <div className="px-[70px] mt-[20px]">
        <p className="text-xl">{comment}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
