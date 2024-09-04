import React from "react";
import bg from "../assets/bg-git.png";
import Mobile from "../assets/bg-git-mobile.png";
import Location from '../assets/Location.png'
import Email from '../assets/Email.png'
import Phone from '../assets/Phone.png'

const GetInTouch = () => {
  return (
<div className="relative bg-center bg-cover bg-fixed" style={{ backgroundImage: `url('${bg}')` }}>
  {/* Desktop Background Image */}
  <img className="h-full hidden md:block" src={bg} alt="" />

  {/* Mobile Background Image */}
  <img className="h-max md:hidden block" src={Mobile} alt="" />

  {/* "Get in touch" heading */}
  <div className="absolute top-10 left-0 w-full text-center text-white">
    <h2 className="text-2xl md:text-4xl font-inter text-[#8BDAFF] font-bold">
      Get in Touch
    </h2>
  </div>

  {/* Container for map and contact information */}
  <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center py-4">
    {/* White div */}
    <div className="bg-white p-4 md:h-64 h-96 rounded-xl w-4/5 md:w-1/2 flex flex-col md:flex-row items-center justify-center">
      {/* Embedded map */}
      <div className="w-full md:w-1/2 p-4 md:h-full h-1/2 flex justify-self-center items-center justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3817.4282605303125!2d77.4322315143683!3d23.215249286643484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39747347c149d5bb%3A0xeb6dd28702484935!2sSample%20Location!5e0!3m2!1sen!2sin!4v1620437468688!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      {/* Contact Information */}
      <div className="w-full md:w-1/2 justify-self-center text-sm  m-6 text-center md:text-left">
        {/* Location */}
        <div className="mb-3">
          <p>Bhopal, Madhya Pradesh</p>
        </div>
        {/* Email */}
        <div className="mb-3">
          <p>example@example.com</p>
        </div>
        {/* Phone */}
        <div>
          <p>123-456-7890</p>
        </div>
      </div>
    </div>
  </div>

  {/* Enquire now button */}
  <div className="absolute bottom-10 left-0 right-0 flex justify-center">
    <button className="border border-[#8BDAFF] text-white text-xs px-10 py-3 rounded">
      Enquire now
    </button>
  </div>
</div>



  );
};

export default GetInTouch;
