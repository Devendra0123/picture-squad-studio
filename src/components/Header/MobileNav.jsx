import React, { useEffect, useState } from "react";
import { CgMenuLeft } from "react-icons/cg";

const MobileNav = () => {

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
    <div className={`md:hidden z-10 fixed top-0 w-full flex items-center justify-between px-[20px] py-[10px] ${scrollReachedViewport ? "bg-gray-800/75" : "bg-transparent"}`}>
      <div className="w-[70px] h-[70px] rounded-full flex items-center justify-center bg-white ">
        <img
          src="./logo-noBg.png"
          alt="logo"
          className="w-[70px] h-[70px] rounded-full "
        />
      </div>

      <div className="w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center ">
        <CgMenuLeft />
      </div>
    </div>
  );
};

export default MobileNav;
