import React from "react";
import Overview1 from '../assets/Overview1.png'
import Overview2 from '../assets/Overview2.png'
import Overview3 from '../assets/Overview3.png'
import Overview4 from '../assets/Overview4.png'

const Overview = () => {
  return (
    <div className="relative z-30 w-full mt-4 md:flex justify-center bg-white">
      <div className="col-1 md:w-1/2 md:px-16 md:mx-16 justify-center font-poppins  text-[#005A9A]  md:m-8 md:py-8 ">
        <div className="font-bold md:text-5xl text-xl">
          We believe a tailored approach is key to success.
        </div>
        <div className="mt-8 text-md  text-black text-justify md:leading-10">
          Every client presents unique challenges and opportunities. We
          recognize this by crafting customized solutions in the facility
          management industry. Our goal is to create a work environment that
          fosters employee satisfaction and motivation, ultimately leading to a
          more productive and thriving workplace.
        </div>
        <div className="flex mt-8 ">
          <div className="md:w-1/4 mx-1  md:px-2">
            <div className="md:text-3xl font-bold"> 7+</div> <div className="text-sm md:text-xl"> States </div>
          </div>
          <div className="md:w-1/4 mx-1 md:px-2">
            <div className="md:text-3xl font-bold"> 60+</div>{" "}
            <div className="text-sm md:text-xl"> Locations </div>
          </div>
          <div className="md:w-1/4 mx-1 md:px-2">
            <div className="md:text-3xl font-bold"> 25+</div> <div className="text-sm md:text-xl"> Clients </div>
          </div>
          <div className="md:w-1/4 mx-1 md:px-2">
            <div className="md:text-3xl font-bold"> 1500+ </div>
            <div className="text-sm md:text-xl"> Professionals </div>
          </div>
        </div>
      </div>
      <div className="col-2 w-1/2 md:flex justify-center  md:m-4 md:mx-16  "> 

          <div className="col-1 md:flex-col flex mt-16">
            <img className="w-48 h-48" src={Overview1} alt="" />
            <img className="w-48 h-48" src={Overview2} alt="" />
          </div>
          <div className="col-2 flex md:flex-col md:w-1/2 ">
          <img className="md:w-60 md:h-60 w-48 h-48" src={Overview4} alt="" />
          <img className="md:w-60 md:h-60 w-48 h-48" src={Overview3} alt="" />
          </div>

      </div>
    </div>
  );
};

export default Overview;
