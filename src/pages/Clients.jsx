import Background from "../assets/HeroBg.png";
import Mobile from "../assets/HeroBg-Mobile.png";
import img1 from "../assets/Clients/img1.png";
import img2 from "../assets/Clients/img2.png";
import img5 from "../assets/Clients/img5.png";
import GetInTouch from '../sections/GetInTouch'

const Clients = () => {
	return (
		<>
			<div className="max-w-full flex justify-center">
				<div className="absolute text-white tracking-wide md:p-16 md:mt-16 py-12 px-4 text-3xl font-inter uppercase font-extrabold flex items-center flex-col mt-[50%]">
					<p className="md:text-8xl text-center">Trusted By<br />Industry Leaders</p>
					<p className="md:text-4xl text-sm normal-case font-normal">Here&apos;s a glimpse into some of the esteemed companies we partner with.</p>
					<div className="text-sm flex justify-center items-center mt-4 w-40 h-10 normal-case font-light rounded bg-[#005A9A]">
						<a href="">Get free quote</a>        
					</div>
				</div>
				<img className="h-full hidden lg:block" src={Background} alt="" />
				<img className="h-max md:hidden block" src={Mobile} alt="" />
			</div>


			<div className="max-w-full flex justify-center">
				<div className="pb-12">
					<div className="md:m-4 p-2 md:p-8 mt-2 md:mt-12 ">
						<div className="font-poppins font-bold flex text-[#005A9A] justify-center w-full text-center text-lg md:text-5xl md:px-20 py-10 md:py-0">
						Here&apos;s a glimpse into some of the esteemed companies we partner with
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

			<div className="flex p-6">
				<div className="flex justify-center items-center border container">
					<div>
						Text
					</div>
				</div>
				<div className="flex justify-center items-center border container">
					<div>
						Text
					</div>
				</div>
				<div className="flex justify-center items-center border container">
					<div>
						Text
					</div>
				</div>
			</div>

			<GetInTouch />
		</>
	);
};

export default Clients;