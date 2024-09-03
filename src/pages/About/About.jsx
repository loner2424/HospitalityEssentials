import React, { useState } from "react";

import aboutBg from "../../assets/images/about/aboutBg.png";

const About = () => {
  const [missionVision, setMissionVision] = useState("mission");

  return (
    <div className="min-h-screen">
      <div
        className="flex flex-col items-center justify-center h-[500px] w-full bg-center bg-cover"
        style={{ backgroundImage: `url('${aboutBg}')` }}
      >
        <div className="text-center w-[70%]">
          <div className="text-white leading-none text-[89px] font-bold">
            LEADING THE WAY IN INTEGRATED FACILITY MANAGEMENT
          </div>
          <button className="px-4 py-2 bg-[#005A9A] rounded-lg text-white mx-auto mt-6">
            Get Free Quote
          </button>
        </div>
      </div>

      <div className="mt-8">
        <div className="mx-auto flex justify-center gap-4 font-semibold">
          <button
            onClick={() => setMissionVision("mission")}
            className={`px-6 py-2 w-[220px] rounded-md ${
              missionVision === "mission"
                ? "bg-[#005A9A] text-white"
                : "border-2 border-[#005A9A] text-[#005A9A]"
            }`}
          >
            OUR MISSION
          </button>
          <button
            onClick={() => setMissionVision("vision")}
            className={`px-6 py-2 w-[220px] rounded-md ${
              missionVision === "vision"
                ? "bg-[#005A9A] text-white"
                : "border-2 border-[#005A9A] text-[#005A9A]"
            }`}
          >
            OUR VISION
          </button>
        </div>

        <div className="mx-auto flex items-center justify-center text-xl mt-6">
          <div className="">{/* Start Quote  */}</div>
          <div className="w-[60%] text-center">
            {missionVision === "mission"
              ? "Our mission is to empower businesses by creating thriving work environments. We achieve this through a customized approach to integrated facility management solutions."
              : "Vision Quote"}
          </div>
          <div className="">{/* End Quote  */}</div>
        </div>
      </div>

      <div className="mt-8">
        <div className="mx-auto text-center text-[50px] font-bold text-[#005A9A]">MEET OUR LEADERSHIP TEAM</div>
        <div className="flex gap-6 justify-center">
            <div className="">
                <div className="">
                    {/* Image  */}
                </div>
                <div className="mt-4 ">
                    {/* Title  */}
                </div>
            </div>
            <div className="">
                <div className="">
                    {/* Image  */}
                </div>
                <div className="mt-4 ">
                    {/* Title  */}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
