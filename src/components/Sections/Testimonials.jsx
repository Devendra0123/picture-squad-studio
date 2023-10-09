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
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="w-[80%] py-[70px] ">
      <p className="font-brunoAce underline underline-offset-8 decoration-primaryBlue text-center font-bold text-xl tracking-[2px]">
        Testimonials
      </p>

      <div className="mt-[50px] font-montserrat">
        {testimonials?.length > 0 && (
          <Slider {...settings} className="flex items-center gap-[30px]">
            {testimonials.map((item, index) => (
              <div key={index} className="px-[20px]">
                <TestimonialCard data={item} />
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default Testimonials;
