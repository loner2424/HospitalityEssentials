import React from "react";
import aboutBg from "../../assets/images/about/aboutBg.png";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <div
        className="flex flex-col items-center justify-center h-[600px] w-full bg-center bg-cover bg-fixed"
        style={{ backgroundImage: `url('${aboutBg}')` }}
      >
        <div className="text-center w-[90%] lg:w-[70%] text-white">
          <div className=" leading-none text-[58px] lg:text-[78px] font-bold">
            WE'RE HERE
            <br /> TO HELP
          </div>
          <div className="w-full text-xl lg:text-2xl text-wrap mt-4 font-medium px-4 lg:px-20">
            We look forward to hearing from you.
          </div>
          <button className=" w-44 py-3 bg-[#005A9A] rounded-md mx-auto mt-6">
            Get Free Quote
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-4 w-[85%] mx-auto mt-14 mb-6">
        <div className="w-full lg:w-1/2">
          <div className="text-[#1C1C1C] ">Ready to Embrace?</div>
          <div className="text-[48px] text-[#005A9A] mt- 4 leading-none font-bold">Contact Us</div>
          <div className="mt-6 leading-relaxed w-full lg:w-3/4 font-medium">
            Our team is driven by a shared passion: transforming spaces with the
            power of glass. We're a team of experienced professionals who
            combine cutting-edge expertise with a dedication to exceptional
            client service.
          </div>
        </div>
        <div className="w-full lg:w-1/2">
        <form className="px-4 p y-8 font-body" onSubmit={(e) => e.preventDefault()}>
            <div className="input1">
              <input
                name="from_name"
                className="bg-transparent w-full mt-2 border-b border-b-[#005A9A] placeholder:text-[#292929] px- 2 py-4 outline-none text-[#292929]"
                placeholder="Full Name"
              />
            </div>
            <div className="input2 mt-6">
              <input
                name="user_email"
                className="bg-transparent w-full mt-2 border-b border-b-[#005A9A] placeholder:text-[#292929] px- 2 py-4 outline-none text-[#292929]"
                placeholder="Your email"
              />
            </div>
            <div className="input3 mt-6">
              <input
                name="phone"
                className="bg-transparent w-full mt-2 border-b border-b-[#005A9A] placeholder:text-[#292929] px- 2 py-4 outline-none text-[#292929]"
                placeholder="Company Name"
              />
            </div>
            <div className="input4 mt-6">
              <input
                name="position"
                className="bg-transparent w-full mt-2 border-b border-b-[#005A9A] placeholder:text-[#292929] px- 2 py-4 outline-none text-[#292929]"
                placeholder="Position"
              />
            </div>
            <div className="input5 mt-6">
              <input
                name="message"
                className="bg-transparent w-full mt-2 border-b border-b-[#005A9A] placeholder:text-[#292929] px- 2 py-4 outline-none text-[#292929]"
                placeholder="Phone Number"
              />
            </div>
            <div className="input6 mt-6">
              <input
                name="message"
                className="bg-transparent w-full mt-2 border-b border-b-[#005A9A] placeholder:text-[#292929] px- 2 py-4 outline-none text-[#292929]"
                placeholder="Message"
              />
            </div>

            <div className="submitButton flex justify-center mt-10">
              <button class="contact3 group relative m-1 cursor-pointer overflow-hidden  border  border-[#005A9A] px-10 py-[12px]">
                <span class="ease absolute top-1/2 h-0 w-64 origin-center -translate-x-20 rotate-45 bg-[#005A9A] transition-all duration-300 group-hover:h-64 group-hover:-translate-y-32"></span>
                <span class="ease relative text-[#005A9A] transition duration-300 group-hover:text-white font-semibold group-hover:font-bold flex items-center gap-2">
                  {/* Let's Talk <img src={rightArrow} className="size-4" /> */}
                  Reach Out
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
