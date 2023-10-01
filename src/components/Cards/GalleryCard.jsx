import React from "react";

const GalleryCard = ({ image }) => {
  return (
    <div className="relative w-[250px] h-[250px] rounded-lg overflow-hidden cursor-pointer ">
      <img
        src={image}
        alt="galleryImage"
        className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover hover:scale-110 hover:sepia transition duration-150 ease-out"
      />
    </div>
  );
};

export default GalleryCard;
