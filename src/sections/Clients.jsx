import img1 from "../assets/images/clients/img1.png";
import img2 from "../assets/images/clients/img2.png";
import img3 from "../assets/images/clients/img3.png";
import img4 from "../assets/images/clients/img4.png";
import img5 from "../assets/images/clients/img5.png";
import img6 from "../assets/images/clients/img6.png";

const Clients = () => {
  return (
    <div className="pb-12">
      <div className="md:m-4 p-2 md:p-8 mt-2 md:mt-12 ">
        <div className="font-poppins font-bold flex text-[#005A9A] justify-center w-full text-lg md:text-5xl">
          Prospective Clients
        </div>
        <div className="md:mt-4 leading-loose p-2 font-poppins flex text-black text-center justify-center w-full text-sm md:text-lg ">
          Learn more about how our industry-leading solutions can serve your
          business.
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
  );
};

export default Clients;
