import React from "react";
import Slider from "react-slick";
import { testimonials } from "../../data/testimonials";
import TestimonialCard from "../Cards/TestimonialCard";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-[70%] py-[70px] ">
      <p className="text-white font-brunoAce underline underline-offset-8 decoration-primaryBlue text-center font-bold text-xl tracking-[2px]">
        Testimonials
      </p>

      <div className="mt-[50px] font-montserrat">
        {testimonials?.length > 0 && (
          <Slider {...settings} className="flex items-center gap-[30px]">
            {testimonials.map((item, index) => (
              <TestimonialCard key={index} data={item} />
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default Testimonials;
