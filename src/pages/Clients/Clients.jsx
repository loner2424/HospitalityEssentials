import Background from "../../assets/HeroBg.png";
import Mobile from "../../assets/HeroBg-Mobile.png";
import img1 from "../../assets/images/clients/img1.png";
import img2 from "../../assets/images/clients/img2.png";
import img5 from "../../assets/images/clients/img5.png";
import customize from "../../assets/images/clients/customize.png";
import unmatched from "../../assets/images/clients/unmatched.png";
import streamline from "../../assets/images/clients/streamline.png";
import GetInTouch from "../../sections/GetInTouch";
import aboutBg from "../../assets/images/about/aboutBg.png";

const Clients = () => {
  return (
    <>
      {/* <div className="max-w-full flex justify-center">
        <div className="absolute text-white tracking-wide md:p-16 md:mt-16 py-12 px-4 text-3xl font-inter uppercase font-extrabold flex items-center flex-col mt-[50%]">
          <p className="md:text-8xl text-center">
            Trusted By
            <br />
            Industry Leaders
          </p>
          <p className="md:text-4xl text-sm normal-case font-normal">
            Here&apos;s a glimpse into some of the esteemed companies we partner
            with.
          </p>
          <div className="text-sm flex justify-center items-center mt-4 w-40 h-10 normal-case font-light rounded bg-[#005A9A]">
            <a href="">Get free quote</a>
          </div>
        </div>
        <img className="h-full hidden lg:block" src={Background} alt="" />
        <img className="h-max md:hidden block" src={Mobile} alt="" />
      </div> */}
      <div
        className="flex flex-col items-center justify-center h-[600px] text-white w-full bg-center bg-cover bg-fixed"
        style={{ backgroundImage: `url('${aboutBg}')` }}
      >
        <div className="text-center w-[70%]">
          <div className="text-white leading-none text-[78px] font-bold">
            TRUSTED BY
            <br />
            INDUSTRY LEADERS
          </div>
          <div className='text-2xl text-wrap mt-4 font-medium px-20'>
            Here's a glimpse into some of the esteemed companies we partner with.
          </div>
          <button className=" w-44 py-3 bg-[#005A9A] rounded-md text-white mx-auto mt-6">
            Get Free Quote
          </button>
        </div>
      </div>

      <div className="max-w-full flex justify-center">
        <div className="pb-12">
          <div className="md:m-4 p-2 md:p-8 mt-2 md:mt-12 ">
            <div className="font-poppins font-bold flex text-[#005A9A] justify-center w-full text-center text-lg md:text-5xl md:px-20 py-10 md:py-0">
              Here&apos;s a glimpse into some of the esteemed companies we
              partner with
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className=" mt-2 justify-center grid grid-cols-3 md:grid-cols-6 gap-y-6 gap-x-4 md:gap-x-8 ">
              <div className="px-6 md:py-6 flex items-center justify-center">
                <img className="md:w-16 w-14" src={img1} alt="" />
              </div>
              <div className="px-6 md:py-6 flex items-center justify-center">
                <img className="md:w-16 w-14" src={img1} alt="" />
              </div>
              <div className="px-6 md:py-6 flex items-center justify-center">
                <img className="md:w-16 w-14" src={img1} alt="" />
              </div>
              <div className="px-6 md:py-6 flex items-center justify-center">
                <img className="md:w-16 w-14" src={img1} alt="" />
              </div>
              <div className="px-6 md:py-6 flex items-center justify-center">
                <img className="md:w-16 w-14" src={img1} alt="" />
              </div>
              <div className="px-6 md:py-6 flex items-center justify-center">
                <img className="md:w-16 w-14" src={img1} alt="" />
              </div>
              <div className="px-6 md:py-6 flex items-center justify-center">
                <img className="md:w-16 w-14" src={img2} alt="" />
              </div>
              <div className="px-6 md:py-6 flex items-center justify-center">
                <img className="md:w-16 w-14" src={img2} alt="" />
              </div>
              <div className="px-6 md:py-6 flex items-center justify-center">
                <img className="md:w-16 w-14" src={img2} alt="" />
              </div>
              <div className="px-6 md:py-6 flex items-center justify-center">
                <img className="md:w-16 w-14" src={img2} alt="" />
              </div>
              <div className="px-6 md:py-6 flex items-center justify-center">
                <img className="md:w-16 w-14" src={img2} alt="" />
              </div>
              <div className="px-6 md:py-6 flex items-center justify-center">
                <img className="md:w-16 w-14" src={img2} alt="" />
              </div>
              <div className="px-6 md:py-6 flex items-center justify-center">
                <img className="md:w-16 w-14" src={img5} alt="" />
              </div>
              <div className="px-6 md:py-6 flex items-center justify-center">
                <img className="md:w-16 w-14" src={img5} alt="" />
              </div>
              <div className="px-6 md:py-6 flex items-center justify-center">
                <img className="md:w-16 w-14" src={img5} alt="" />
              </div>
              <div className="px-6 md:py-6 flex items-center justify-center">
                <img className="md:w-16 w-14" src={img5} alt="" />
              </div>
              <div className="px-6 md:py-6 flex items-center justify-center">
                <img className="md:w-16 w-14" src={img5} alt="" />
              </div>
              <div className="px-6 md:py-6 flex items-center justify-center">
                <img className="md:w-16 w-14" src={img5} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
        
      
      <div className="text-[#005A9A] text-[55px] text-center font-bold">Why Choose Hospitality Essentials?</div>
      <div className="flex p-6">
        <div className="flex justify-between gap-4 w-full">
          <div className="relative bg-cover w-1/3 h-[530px] group "
            style={{ backgroundImage: `url('${customize}')` }}
          >
            <div className="transition-all opacity-[51%] absolute w-full h-full z-0 bg-[#005A9A] group-hover:opacity-[67%] ease-out duration-500" />
            
            <div
              href="#"
              className="relative left-1/2 top-1/2 trasnform -translate-x-1/2 -translate-y-1/2 h-[90%] w-[85%] inline-block overflow-hidden rounded border border-transparent px-12 py-3 text-sm font-medium text-slate-800 hover:text-violet-600 focus:outline-none focus:ring active:bg-indigo-600 active:text-white"
            >
              <span class="ease absolute left-0 top-0 h-0 w-0 border-t-[3px] border-white transition-all duration-500 group-hover:w-full"></span>
              <span class="ease absolute right-0 top-0 h-0 w-0 border-r-[3px] border-white transition-all duration-500 group-hover:h-full"></span>
              <span class="ease absolute bottom-0 right-0 h-0 w-0 border-b-[3px] border-white transition-all duration-500 group-hover:w-full"></span>
              <span class="ease absolute bottom-0 left-0 h-0 w-0 border-l-[3px] border-white transition-all duration-500 group-hover:h-full"></span>
            </div>
            <div className="hidden group-hover:block transition-all opacity-0 group-hover:opacity-100 ease-out absolute top-1/2 left-1/2 trasnform -translate-x-1/2 -translate-y-1/2 text-white w-[70%] text-center">
                {/* <div className="text-2xl font-semibold">Facility Management</div> */}
                <div className="text-lg ">We streamline operations and improve efficiency, allowing you to focus on your core business objectives.</div>
            </div>
            <div className="group-hover:hidden transition-all opacity-100 group-hover:opacity-0 ease-out absolute top-1/2 left-1/2 trasnform -translate-x-1/2 -translate-y-1/2 text-white w-[70%] text-center">
                {/* <div className="text-2xl font-semibold">Facility Management</div> */}
                <div className="text-4xl font-bold ">Customized <br/> Solutions</div>
            </div>
          </div>
          <div className="relative bg-cover w-1/3 h-[530px] group "
            style={{ backgroundImage: `url('${streamline}')` }}
          >
            <div className="transition-all opacity-[51%] absolute w-full h-full z-0 bg-[#005A9A] group-hover:opacity-[67%] ease-out duration-500" />
            
            <div
              href="#"
              className="relative left-1/2 top-1/2 trasnform -translate-x-1/2 -translate-y-1/2 h-[90%] w-[85%] inline-block overflow-hidden rounded border border-transparent px-12 py-3 text-sm font-medium text-slate-800 hover:text-violet-600 focus:outline-none focus:ring active:bg-indigo-600 active:text-white"
            >
              <span class="ease absolute left-0 top-0 h-0 w-0 border-t-[3px] border-white transition-all duration-500 group-hover:w-full"></span>
              <span class="ease absolute right-0 top-0 h-0 w-0 border-r-[3px] border-white transition-all duration-500 group-hover:h-full"></span>
              <span class="ease absolute bottom-0 right-0 h-0 w-0 border-b-[3px] border-white transition-all duration-500 group-hover:w-full"></span>
              <span class="ease absolute bottom-0 left-0 h-0 w-0 border-l-[3px] border-white transition-all duration-500 group-hover:h-full"></span>
            </div>
            <div className="hidden group-hover:block transition-all opacity-0 group-hover:opacity-100 ease-out absolute top-1/2 left-1/2 trasnform -translate-x-1/2 -translate-y-1/2 text-white w-[70%] text-center">
                {/* <div className="text-2xl font-semibold">Facility Management</div> */}
                <div className="text-lg ">We streamline operations and improve efficiency, allowing you to focus on your core business objectives.</div>
            </div>
            <div className="group-hover:hidden transition-all opacity-100 group-hover:opacity-0 ease-out absolute top-1/2 left-1/2 trasnform -translate-x-1/2 -translate-y-1/2 text-white w-[70%] text-center">
                {/* <div className="text-2xl font-semibold">Facility Management</div> */}
                <div className="text-4xl font-bold ">Streamline <br/> Operations</div>
            </div>
          </div>
          <div className="relative bg-cover w-1/3 h-[530px] group "
            style={{ backgroundImage: `url('${unmatched}')` }}
          >
            <div className="transition-all opacity-[51%] absolute w-full h-full z-0 bg-[#005A9A] group-hover:opacity-[67%] ease-out duration-500" />
            
            <div
              href="#"
              className="relative left-1/2 top-1/2 trasnform -translate-x-1/2 -translate-y-1/2 h-[90%] w-[85%] inline-block overflow-hidden rounded border border-transparent px-12 py-3 text-sm font-medium text-slate-800 hover:text-violet-600 focus:outline-none focus:ring active:bg-indigo-600 active:text-white"
            >
              <span class="ease absolute left-0 top-0 h-0 w-0 border-t-[3px] border-white transition-all duration-500 group-hover:w-full"></span>
              <span class="ease absolute right-0 top-0 h-0 w-0 border-r-[3px] border-white transition-all duration-500 group-hover:h-full"></span>
              <span class="ease absolute bottom-0 right-0 h-0 w-0 border-b-[3px] border-white transition-all duration-500 group-hover:w-full"></span>
              <span class="ease absolute bottom-0 left-0 h-0 w-0 border-l-[3px] border-white transition-all duration-500 group-hover:h-full"></span>
            </div>
            <div className="hidden group-hover:block transition-all opacity-0 group-hover:opacity-100 ease-out absolute top-1/2 left-1/2 trasnform -translate-x-1/2 -translate-y-1/2 text-white w-[70%] text-center">
                {/* <div className="text-2xl font-semibold">Facility Management</div> */}
                <div className="text-lg ">We streamline operations and improve efficiency, allowing you to focus on your core business objectives.</div>
            </div>
            <div className="group-hover:hidden transition-all opacity-100 group-hover:opacity-0 ease-out absolute top-1/2 left-1/2 trasnform -translate-x-1/2 -translate-y-1/2 text-white w-[70%] text-center">
                {/* <div className="text-2xl font-semibold">Facility Management</div> */}
                <div className="text-4xl font-bold ">Unmatched <br/> Expertise</div>
            </div>
          </div>
        </div>
      </div>

      <GetInTouch />
    </>
  );
};

export default Clients;
