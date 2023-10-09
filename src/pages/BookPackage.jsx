import React from "react";

const BookPackage = () => {
  return (
    <div className="min h-[100vh] w-full flex flex-col items-center py-[50px]">
      <div>
        <h1 className="font-montserrat font-bold text-xl underline underline-offset-8 decoration-primaryRed">
          Book Package
        </h1>
      </div>
      <div className="w-[80%] flex items-center gap-[20px] mt-[50px] ">
        <div className="w-1/2 hidden lg:block">
          <img
            src="/bg1.jpg"
            alt="backgroundImage"
            className="w-full h-full object-cover rounded-[10px] shadow-lg"
          />
        </div>

        <form className="bg-darkGray text-white p-[20px] rounded-[10px] w-full md:w-[500px] flex flex-col gap-[20px] shadow-lg shadow-primaryRed">
          <div className="flex flex-col gap-[5px]">
            <label>Name</label>
            <input
              type="text"
              placeholder="Name..."
              className="p-[10px] outline-none border border-slate-400 bg-transparent rounded-[10px]"
            />
          </div>
          <div className="flex flex-col gap-[5px]">
            <label>Phone Number</label>
            <input
              type="number"
              placeholder="Phone number..."
              className="p-[10px] outline-none border border-slate-400 bg-transparent rounded-[10px]"
            />
          </div>
          <div className="flex flex-col gap-[5px]">
            <label>Date</label>
            <input
              type="date"
              className="p-[10px] outline-none border border-slate-400 bg-transparent rounded-[10px]"
            />
          </div>
          <div className="flex flex-col gap-[5px]">
            <label>Time</label>
            <input
              type="time"
              className="p-[10px] outline-none border border-slate-400 bg-transparent rounded-[10px]"
            />
          </div>
          <div>
            <button className="bg-primaryBlue px-[20px] py-[8px] text-white rounded-[10px] text-lg">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookPackage;
