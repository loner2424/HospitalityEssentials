import React from "react";

import aboutBg from "../../assets/images/about/aboutBg.png";

import Travel from "../../assets/images/services/travel.png";
import Guesthouse from "../../assets/images/services/guesthouse.png";
import Laundry from "../../assets/images/services/laundry.png";
import Health from "../../assets/images/services/healthcare.png";
import Facility from "../../assets/images/services/facility.png";
import Outsource from "../../assets/images/services/outsource.png";
import Food from "../../assets/images/services/food.png";
import Township from "../../assets/images/services/township.png";

const Services = () => {
  return (
    <div className="min-h-screen">
      <div
        className="flex flex-col items-center justify-center h-[600px] w-full bg-center bg-cover bg-fixed"
        style={{ backgroundImage: `url('${aboutBg}')` }}
      >
        <div className="text-center w-[70%] text-white">
          <div className=" leading-none text-[78px] font-bold">
            ELEVATING YOUR WORKPLACE
          </div>
          <div className="text-2xl text-wrap mt-4 font-medium px-20">
            Discover how Hospitality Essential can streamline operations,
            enhance efficiency, and create a thriving work environment.
          </div>
          <button className=" w-44 py-3 bg-[#005A9A] rounded-md mx-auto mt-6">
            Get Free Quote
          </button>
        </div>
      </div>
      <div className="mt-6 mb-12">
        <div className="mx-auto text-center text-[50px] font-bold text-[#005A9A]">
          Comprehensive Facility Management Solutions
        </div>
        <div className="grid grid-cols-4 gap-4 mt-8 w-[85%] mx-auto">
          <div className="relative bg-cover w-[300px] h-[430px] group "
            style={{ backgroundImage: `url('${Facility}')` }}
          >
            <div className="transition-all opacity-0 absolute w-full h-full z-0 bg-black group-hover:opacity-60 ease-out duration-500" />
            <a
              href="#"
              className="relative left-1/2 top-1/2 trasnform -translate-x-1/2 -translate-y-1/2 h-[90%] w-[85%] inline-block overflow-hidden rounded border border-transparent px-12 py-3 text-sm font-medium text-slate-800 hover:text-violet-600 focus:outline-none focus:ring active:bg-indigo-600 active:text-white"
            >
              <span class="ease absolute left-0 top-0 h-0 w-0 border-t-[3px] border-white transition-all duration-500 group-hover:w-full"></span>
              <span class="ease absolute right-0 top-0 h-0 w-0 border-r-[3px] border-white transition-all duration-500 group-hover:h-full"></span>
              <span class="ease absolute bottom-0 right-0 h-0 w-0 border-b-[3px] border-white transition-all duration-500 group-hover:w-full"></span>
              <span class="ease absolute bottom-0 left-0 h-0 w-0 border-l-[3px] border-white transition-all duration-500 group-hover:h-full"></span>
            </a>
            <div className="hidden group-hover:block transition-all opacity-0 group-hover:opacity-100 ease-out absolute top-1/2 left-1/2 trasnform -translate-x-1/2 -translate-y-1/2 text-white w-[70%] text-center">
                <div className="text-2xl font-semibold">Facility Management</div>
                <div className="text-lg mt-12">Eliminate laundry hassles. We ensure fresh, hygienic uniforms, linens, and towels.</div>
            </div>
          </div>
          <div className="relative bg-cover w-[300px] h-[430px] group "
            style={{ backgroundImage: `url('${Laundry}')` }}
          >
            <div className="transition-all opacity-0 absolute w-full h-full z-0 bg-black group-hover:opacity-60 ease-out duration-500" />
            <a
              href="#"
              className="relative left-1/2 top-1/2 trasnform -translate-x-1/2 -translate-y-1/2 h-[90%] w-[85%] inline-block overflow-hidden rounded border border-transparent px-12 py-3 text-sm font-medium text-slate-800 hover:text-violet-600 focus:outline-none focus:ring active:bg-indigo-600 active:text-white"
            >
              <span class="ease absolute left-0 top-0 h-0 w-0 border-t-[3px] border-white transition-all duration-500 group-hover:w-full"></span>
              <span class="ease absolute right-0 top-0 h-0 w-0 border-r-[3px] border-white transition-all duration-500 group-hover:h-full"></span>
              <span class="ease absolute bottom-0 right-0 h-0 w-0 border-b-[3px] border-white transition-all duration-500 group-hover:w-full"></span>
              <span class="ease absolute bottom-0 left-0 h-0 w-0 border-l-[3px] border-white transition-all duration-500 group-hover:h-full"></span>
            </a>
            <div className="hidden group-hover:block transition-all opacity-0 group-hover:opacity-100 ease-out absolute top-1/2 left-1/2 trasnform -translate-x-1/2 -translate-y-1/2 text-white w-[70%] text-center">
                <div className="text-2xl font-semibold">Laundry Management</div>
                <div className="text-lg mt-12">Eliminate laundry hassles. We ensure fresh, hygienic uniforms, linens, and towels.</div>
            </div>
          </div>
          <div className="relative bg-cover w-[300px] h-[430px] group "
            style={{ backgroundImage: `url('${Food}')` }}
          >
            <div className="transition-all opacity-0 absolute w-full h-full z-0 bg-black group-hover:opacity-60 ease-out duration-500" />
            <a
              href="#"
              className="relative left-1/2 top-1/2 trasnform -translate-x-1/2 -translate-y-1/2 h-[90%] w-[85%] inline-block overflow-hidden rounded border border-transparent px-12 py-3 text-sm font-medium text-slate-800 hover:text-violet-600 focus:outline-none focus:ring active:bg-indigo-600 active:text-white"
            >
              <span class="ease absolute left-0 top-0 h-0 w-0 border-t-[3px] border-white transition-all duration-500 group-hover:w-full"></span>
              <span class="ease absolute right-0 top-0 h-0 w-0 border-r-[3px] border-white transition-all duration-500 group-hover:h-full"></span>
              <span class="ease absolute bottom-0 right-0 h-0 w-0 border-b-[3px] border-white transition-all duration-500 group-hover:w-full"></span>
              <span class="ease absolute bottom-0 left-0 h-0 w-0 border-l-[3px] border-white transition-all duration-500 group-hover:h-full"></span>
            </a>
            <div className="hidden group-hover:block transition-all opacity-0 group-hover:opacity-100 ease-out absolute top-1/2 left-1/2 trasnform -translate-x-1/2 -translate-y-1/2 text-white w-[70%] text-center">
                <div className="text-2xl font-semibold">Food Service Management</div>
                <div className="text-lg mt-12">Eliminate laundry hassles. We ensure fresh, hygienic uniforms, linens, and towels.</div>
            </div>
          </div>
          <div className="relative bg-cover w-[300px] h-[430px] group "
            style={{ backgroundImage: `url('${Township}')` }}
          >
            <div className="transition-all opacity-0 absolute w-full h-full z-0 bg-black group-hover:opacity-60 ease-out duration-500" />
            <a
              href="#"
              className="relative left-1/2 top-1/2 trasnform -translate-x-1/2 -translate-y-1/2 h-[90%] w-[85%] inline-block overflow-hidden rounded border border-transparent px-12 py-3 text-sm font-medium text-slate-800 hover:text-violet-600 focus:outline-none focus:ring active:bg-indigo-600 active:text-white"
            >
              <span class="ease absolute left-0 top-0 h-0 w-0 border-t-[3px] border-white transition-all duration-500 group-hover:w-full"></span>
              <span class="ease absolute right-0 top-0 h-0 w-0 border-r-[3px] border-white transition-all duration-500 group-hover:h-full"></span>
              <span class="ease absolute bottom-0 right-0 h-0 w-0 border-b-[3px] border-white transition-all duration-500 group-hover:w-full"></span>
              <span class="ease absolute bottom-0 left-0 h-0 w-0 border-l-[3px] border-white transition-all duration-500 group-hover:h-full"></span>
            </a>
            <div className="hidden group-hover:block transition-all opacity-0 group-hover:opacity-100 ease-out absolute top-1/2 left-1/2 trasnform -translate-x-1/2 -translate-y-1/2 text-white w-[70%] text-center">
                <div className="text-2xl font-semibold">Township Management</div>
                <div className="text-lg mt-12">Eliminate laundry hassles. We ensure fresh, hygienic uniforms, linens, and towels.</div>
            </div>
          </div>
          <div className="relative bg-cover w-[300px] h-[430px] group "
            style={{ backgroundImage: `url('${Guesthouse}')` }}
          >
            <div className="transition-all opacity-0 absolute w-full h-full z-0 bg-black group-hover:opacity-60 ease-out duration-500" />
            <a
              href="#"
              className="relative left-1/2 top-1/2 trasnform -translate-x-1/2 -translate-y-1/2 h-[90%] w-[85%] inline-block overflow-hidden rounded border border-transparent px-12 py-3 text-sm font-medium text-slate-800 hover:text-violet-600 focus:outline-none focus:ring active:bg-indigo-600 active:text-white"
            >
              <span class="ease absolute left-0 top-0 h-0 w-0 border-t-[3px] border-white transition-all duration-500 group-hover:w-full"></span>
              <span class="ease absolute right-0 top-0 h-0 w-0 border-r-[3px] border-white transition-all duration-500 group-hover:h-full"></span>
              <span class="ease absolute bottom-0 right-0 h-0 w-0 border-b-[3px] border-white transition-all duration-500 group-hover:w-full"></span>
              <span class="ease absolute bottom-0 left-0 h-0 w-0 border-l-[3px] border-white transition-all duration-500 group-hover:h-full"></span>
            </a>
            <div className="hidden group-hover:block transition-all opacity-0 group-hover:opacity-100 ease-out absolute top-1/2 left-1/2 trasnform -translate-x-1/2 -translate-y-1/2 text-white w-[70%] text-center">
                <div className="text-2xl font-semibold">Guesthouse Management</div>
                <div className="text-lg mt-12">Eliminate laundry hassles. We ensure fresh, hygienic uniforms, linens, and towels.</div>
            </div>
          </div>
          <div className="relative bg-cover w-[300px] h-[430px] group "
            style={{ backgroundImage: `url('${Health}')` }}
          >
            <div className="transition-all opacity-0 absolute w-full h-full z-0 bg-black group-hover:opacity-60 ease-out duration-500" />
            <a
              href="#"
              className="relative left-1/2 top-1/2 trasnform -translate-x-1/2 -translate-y-1/2 h-[90%] w-[85%] inline-block overflow-hidden rounded border border-transparent px-12 py-3 text-sm font-medium text-slate-800 hover:text-violet-600 focus:outline-none focus:ring active:bg-indigo-600 active:text-white"
            >
              <span class="ease absolute left-0 top-0 h-0 w-0 border-t-[3px] border-white transition-all duration-500 group-hover:w-full"></span>
              <span class="ease absolute right-0 top-0 h-0 w-0 border-r-[3px] border-white transition-all duration-500 group-hover:h-full"></span>
              <span class="ease absolute bottom-0 right-0 h-0 w-0 border-b-[3px] border-white transition-all duration-500 group-hover:w-full"></span>
              <span class="ease absolute bottom-0 left-0 h-0 w-0 border-l-[3px] border-white transition-all duration-500 group-hover:h-full"></span>
            </a>
            <div className="hidden group-hover:block transition-all opacity-0 group-hover:opacity-100 ease-out absolute top-1/2 left-1/2 trasnform -translate-x-1/2 -translate-y-1/2 text-white w-[70%] text-center">
                <div className="text-2xl font-semibold">Healthcare Management</div>
                <div className="text-lg mt-12">Eliminate laundry hassles. We ensure fresh, hygienic uniforms, linens, and towels.</div>
            </div>
          </div>
          <div className="relative bg-cover w-[300px] h-[430px] group "
            style={{ backgroundImage: `url('${Travel}')` }}
          >
            <div className="transition-all opacity-0 absolute w-full h-full z-0 bg-black group-hover:opacity-60 ease-out duration-500" />
            <a
              href="#"
              className="relative left-1/2 top-1/2 trasnform -translate-x-1/2 -translate-y-1/2 h-[90%] w-[85%] inline-block overflow-hidden rounded border border-transparent px-12 py-3 text-sm font-medium text-slate-800 hover:text-violet-600 focus:outline-none focus:ring active:bg-indigo-600 active:text-white"
            >
              <span class="ease absolute left-0 top-0 h-0 w-0 border-t-[3px] border-white transition-all duration-500 group-hover:w-full"></span>
              <span class="ease absolute right-0 top-0 h-0 w-0 border-r-[3px] border-white transition-all duration-500 group-hover:h-full"></span>
              <span class="ease absolute bottom-0 right-0 h-0 w-0 border-b-[3px] border-white transition-all duration-500 group-hover:w-full"></span>
              <span class="ease absolute bottom-0 left-0 h-0 w-0 border-l-[3px] border-white transition-all duration-500 group-hover:h-full"></span>
            </a>
            <div className="hidden group-hover:block transition-all opacity-0 group-hover:opacity-100 ease-out absolute top-1/2 left-1/2 trasnform -translate-x-1/2 -translate-y-1/2 text-white w-[70%] text-center">
                <div className="text-2xl font-semibold">Travel Management</div>
                <div className="text-lg mt-12">Eliminate laundry hassles. We ensure fresh, hygienic uniforms, linens, and towels.</div>
            </div>
          </div>
          <div className="relative bg-cover w-[300px] h-[430px] group "
            style={{ backgroundImage: `url('${Outsource}')` }}
          >
            <div className="transition-all opacity-0 absolute w-full h-full z-0 bg-black group-hover:opacity-60 ease-out duration-500" />
            <a
              href="#"
              className="relative left-1/2 top-1/2 trasnform -translate-x-1/2 -translate-y-1/2 h-[90%] w-[85%] inline-block overflow-hidden rounded border border-transparent px-12 py-3 text-sm font-medium text-slate-800 hover:text-violet-600 focus:outline-none focus:ring active:bg-indigo-600 active:text-white"
            >
              <span class="ease absolute left-0 top-0 h-0 w-0 border-t-[3px] border-white transition-all duration-500 group-hover:w-full"></span>
              <span class="ease absolute right-0 top-0 h-0 w-0 border-r-[3px] border-white transition-all duration-500 group-hover:h-full"></span>
              <span class="ease absolute bottom-0 right-0 h-0 w-0 border-b-[3px] border-white transition-all duration-500 group-hover:w-full"></span>
              <span class="ease absolute bottom-0 left-0 h-0 w-0 border-l-[3px] border-white transition-all duration-500 group-hover:h-full"></span>
            </a>
            <div className="hidden group-hover:block transition-all opacity-0 group-hover:opacity-100 ease-out absolute top-1/2 left-1/2 trasnform -translate-x-1/2 -translate-y-1/2 text-white w-[70%] text-center">
                <div className="text-2xl font-semibold">Out source Partnership</div>
                <div className="text-lg mt-12">Eliminate laundry hassles. We ensure fresh, hygienic uniforms, linens, and towels.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
