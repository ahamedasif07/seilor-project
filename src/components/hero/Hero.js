import React from "react";
import Carousel from "../Carousels/Carousel";
import heroimgOne from "../../../public/images/project-sailor-home-page035.jpg";
import heroimgTow from "../../../public/images/project-sailor-home-page036.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <Carousel />
      <div className="flex items-center md:flex-row flex-col">
        <div className="md:w-1/2 w-full">
          <Image
            src={heroimgOne}
            alt="hero image"
            objectFit="cover"
            // set approx height or use your image actual height
          />
        </div>
        <div className="md:w-1/2 w-full">
          <Image
            src={heroimgTow}
            alt="hero image"
            objectFit="cover" // set approx height or use your image actual height
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
