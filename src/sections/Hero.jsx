import React from "react";
import Background from "../assets/HeroBg.png";
import Mobile from "../assets/HeroBg-Mobile.png";
import excellence from "../assets/excellence.png";

const Hero = () => {
  return (
    <div className="h-[100vh] max-w-full overflow-hidden">
      <div className="absolute h-screen z-20 text-white bg-transparent tracking-wide md:p-16 md:mt-24 py-12 px-4 text-3xl font-inter uppercase font-extrabold">
        <p className="md:text-8xl">Hospitality</p>
        <p className="md:text-8xl flex">
          <p>Essentials</p>
          <img className="mx-4 md:block hidden" src={excellence} alt="" />
        </p>
        <p className="md:text-4xl text-sm normal-case font-normal">
          Tailor Made Solutions
        </p>
        <div className=" absolute text-sm flex justify-center items-center mt-4 w-36 h-10 normal-case font-light rounded bg-[#005A9A]">
          <a href="">  Get free quote</a>
        
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full z-0" style={{ height: `calc(100vh + 540px)` }}>
        <img className="h-screen w-full hidden lg:block sticky top-0" src={Background} alt="" />
      </div>
      {/* <img className="h-full hidden lg:block " src={Background} alt="" /> */}
      <img className="h-max md:hidden block" src={Mobile} alt="" />
    </div>
  );
};

export default Hero;
