import React, { useEffect, useState } from "react";
import { navLinks } from "../../data/navLinks";

const Navbar = () => {

  const [scrollReachedViewport, setScrollReachedViewport] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;

      if (scrollPosition >= viewportHeight) {
        setScrollReachedViewport(true);
      } else {
        setScrollReachedViewport(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`z-10 w-full hidden md:flex flex-col ${scrollReachedViewport ? "bg-gray-800" : "bg-transparent"} fixed top-0`}>
      <div className="relative w-full flex items-center gap-[30px] justify-evenly py-[30px] px-[20px] text-white font-brunoAce tracking-[2px]">
        <ul className="w-1/2 flex items-center justify-evenly gap-[20px] text-lg font-bold ">
          <li>Home</li>
          <li>Session</li>
        </ul>
        <div className="absolute left-[50%] top-[50%] transform -translate-x-[50%] w-[110px] h-[110px] rounded-full flex items-center justify-center bg-white ">
          <img
            src="./logo-noBg.png"
            alt="logo"
            className="w-[100px] h-[100px] rounded-full "
          />
        </div>

        <ul className="w-1/2 flex items-center justify-evenly gap-[20px] text-lg font-bold text-white">
          <li>Gallery</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="w-full h-[2px] bg-white" />
    </div>
  );
};

export default Navbar;
