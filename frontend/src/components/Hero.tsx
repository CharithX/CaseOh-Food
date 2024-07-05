import React from "react";
import Image from "next/image";
import hero from "../../public/hero.png";

const Hero = () => {
  return (
    <div className="flex justify-center items-center">
      <Image
        src={hero}
        alt="Picture of the author"
        className="max-w-[1300px] max-h-[800px] w-full object-cover"
      />
    </div>
  );
};

export default Hero;
