import React from "react";



export function ImageCollage({ images = [] }) {
  const img_map = [
    { src: images[1], className: "sm:top-1/2 sm:left-1/4 lg:top-1/4 lg:left-2/3 rotate-[30deg]" },
    { src: images[2], className: "lg:right-1/3" },
    { src: images[3], className: "lg:bottom-1/4 lg:-right-1/5 rotate-[30deg]" },
    { src: images[4], className: "lg:bottom-1/4 lg:right-3/4 rotate-[-30deg]" },
    
  ];
  return (
    <div className="relative sm:h-[10%] lg:w-full lg:h-screen flex justify-center items-center">
      {/* Center Image */}
      <div className="absolute flex justify-center items-center">
          <img src={images[0]} className="rounded-3xl scale-125 sm:w-[10vw] md:w-[15vw] w-[25vw] shadow-lg z-20 transition-all delay-50 hover:scale-150" alt="center-image"/>
      </div>

      {/* Scattered Images */}
      {img_map.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={`img-${index}`}
          className={`relative ${image.className} w-[20vw] sm:w-[18vw] md:w-[15vw] lg:w-[13vw] rounded-2xl shadow-md transition-transform duration-300 hover:scale-110`}
        />
      ))}
    </div>
  );
}
