import React, { useEffect, useState } from "react";
import { navLinks } from "../../data/navLinks";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [scrollReachedViewport, setScrollReachedViewport] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;

      if (scrollPosition >= 100) {
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
    <div className={`z-10 w-full hidden md:flex flex-col items-center ${scrollReachedViewport ? "bg-gray-800" : "bg-transparent"}`}>
      <div className="relative w-[80%] flex items-center gap-[30px] justify-end py-[20px] px-[20px] font-montserrat tracking-[2px]">
        <div className="absolute top-[20px] left-[20px] w-[100px] h-[100px] rounded-full flex items-center justify-center bg-white ">
          <img
            src="./logo-noBg.png"
            alt="logo"
            className="w-[120px] h-[120px] rounded-full "
          />
        </div>

        <div className="w-max flex flex-col gap-[12px]">
          <ul className="flex items-center justify-end gap-[20px] font-poppins">
            {
              navLinks.map((item, index) => (
                <li key={index} className={`${index === navLinks.length - 1 && "bg-primaryBlue rounded-[4px]"} p-[10px]`}>
                  <Link to={item.link}>
                    {item.name}
                  </Link>
                </li>
              ))
            }
          </ul>
          <div className="w-full h-[1px] bg-gradient-to-r from-slate-300 from-10% via-primaryBlue via-30% to-slate-300 to-90%" />
        </div>

      </div>
    </div>
  );
};

export default Navbar;
