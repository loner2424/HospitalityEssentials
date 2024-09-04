import React, { useState } from "react";

import aboutBg from "../../assets/images/about/aboutBg.png";
import storyBg from "../../assets/images/about/storyBg.png";
import storyPotrait from "../../assets/images/about/storyPotrait.png";
import team1 from "../../assets/images/about/team1.png";
import startQuote from "../../assets/images/about/startQuote.png";
import endQuote from "../../assets/images/about/endQuote.png";

const About = () => {
  const [missionVision, setMissionVision] = useState("mission");

  return (
    <div className="min-h-screen">
      <div
        className="flex flex-col items-center justify-center h-[600px] w-full bg-center bg-cover bg-fixed"
        style={{ backgroundImage: `url('${aboutBg}')` }}
      >
        <div className="text-center w-[70%]">
          <div className="text-white leading-none text-[78px] font-bold">
            LEADING THE WAY IN INTEGRATED FACILITY MANAGEMENT
          </div>
          <button className=" w-44 py-3 bg-[#005A9A] rounded-md text-white mx-auto mt-6">
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

        <div className="mx-auto flex items-center justify-center gap-6 text-xl mt-2">
          <div className="">{/* Start Quote  */}
            <img src={startQuote} className="h-10" />
          </div>
          <div className="w-[60%] text-center pt-8">
            {missionVision === "mission"
              ? "Our mission is to empower businesses by creating thriving work environments. We achieve this through a customized approach to integrated facility management solutions."
              : "Vision Quote"}
          </div>
          <div className="pt-14">{/* End Quote  */}
            <img src={endQuote} className="h-10" />
          </div>
        </div>
      </div>

      <div
        className="flex text-white p-12 mt-12 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('${storyBg}')` }}
      >
        <img src={storyPotrait} className="size-[520px] z-20" />
        <div className="border-2 px-36 -ml-24 mt-28 h-[500px]">
          <div className="text-[65px] text-[#8BDAFF] font-bold text-wrap leading-[80px] mt-4">
            A Story Steeped
            <br /> in Tradition{" "}
          </div>
          <div className="mt-4 text-xl leading-loose">
            At Hospitality Essential, we believe that a well-managed facility is
            more than just a clean and functional space. It's the foundation for
            a productive and positive work experience. Our team is passionate
            about exceeding expectations and delivering exceptional service that
            fosters a sense of community within your organization.{" "}
          </div>
          <div className="w-full flex justify-center">
            <button className="mt-5 mx-auto border-2 border-[#8BDAFF] px-4 py-3 rounded-md">
              Read More
            </button>
          </div>
        </div>
      </div>

      <div className=" my-8">
        {/* <div className="absolute top-0">
          <img src={storyBg} className="h-full w-full"/>
        </div> */}
        <div className="mx-auto text-center text-[50px] font-bold text-[#005A9A]">
          MEET OUR LEADERSHIP TEAM
        </div>
        <div className="flex gap-6 justify-center mt-4">
          <div className="w-1/4">
            <div className="">
              {/* Image  */}
              <img src={team1} className="h- [400px] w-full" />
            </div>
            <div className="mt-4 text-center">
              {/* Title  */}
              <div className="text-[#005A9A] text-2xl font-semibold">Praharsh Dabral</div>
              <div className="text-lg">
                Visionary, results-oriented, passionate about building a strong
                company culture.
              </div>
            </div>
          </div>
          <div className="w-1/4">
            <div className="">
              {/* Image  */}
              <img src={team1} className="h- [400px] w-full" />
            </div>
            <div className="mt-4 text-center">
              {/* Title  */}
              <div className="text-[#005A9A] text-2xl font-semibold">Praharsh Dabral</div>
              <div className="text-lg">
                Visionary, results-oriented, passionate about building a strong
                company culture.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
