import React from "react";
import bg from "../assets/Bg-Awards.png";
import Mobile from "../assets/AwardsMobileBg.png";
import img1 from "../assets/Awards/img1.png";
import img2 from "../assets/Awards/img2.png";
import img3 from "../assets/Awards/img3.png";
import img4 from "../assets/Awards/img4.png";

const Awards = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Desktop Background Image */}
      <img className="h-full hidden md:block " src={bg} alt="" />

      {/* Mobile Background Image */}
      <img className="h-max md:hidden block" src={Mobile} alt="" />

      <div className="absolute inset-0 flex flex-col justify-start ">
        <div className="md:m-4 p-2 md:p-8 mt-8 md:mt-12 text-center">
          <div className="font-poppins font-bold text-[#005A9A] text-2xl md:text-5xl">
            Awards and Recognitions
          </div>
          <div className="md:mt-4 leading-loose md:px-32 p-4 text-center font-poppins mt-8 text-black text-sm md:text-lg">
            Recognition is the greatest motivator. Our hard work and thirst for
            achieving excellence every second moment have won many awards in our
            journey. We also believe that a great team member is like a four
            leaf clover, hard to find and lucky to have. Thus we also recognize
            the best in teams and motivate them.
          </div>

          {/* Container for Images */}
          <div className="md:flex grid grid-cols-2 justify-center h-auto mt-16 max-h-lvh md:mt-24">
            <img className="m-1 p-2 justify-self-end" src={img1} alt="" />
            <img className="m-1 h-auto p-2 " src={img4} alt="" />
            <img className="m-1 p-2 justify-self-end" src={img3} alt="" />
            <img className="m-1 p-2" src={img2} alt="" />
          </div>
        </div>
        <div className="md:m-4 p-2 md:p-8 mt-16 md:mt-12 text-center">
          <div className="font-poppins font-bold text-[#005A9A] text-2xl md:text-5xl">
            Staff Training and Activities
          </div>
          <div className="md:mt-4 leading-loose md:px-32 p-4 mt-8 text-center font-poppins text-black text-sm md:text-lg">
            Training is on going process in Hospitality Essentials. We keep
            training our team members time to time. The purpose of the training
            is to tighten up the slack, toughen the body & mind, and polish the
            spirit. We, as and when organize interactive activities such as food
            festivals to keep the crowd engaged.
          </div>

          {/* Container for Images */}
          <div className="md:flex grid grid-cols-2 justify-center h-auto mt-16 max-h-lvh md:mt-24">
            <img className="m-1 p-2 justify-self-end" src={img1} alt="" />
            <img className="m-1 h-auto p-2 " src={img4} alt="" />
            <img className="m-1 p-2 justify-self-end" src={img3} alt="" />
            <img className="m-1 p-2" src={img2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
