import { BsCartPlus } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const LatestToy = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="lg:mx-32 lg:my-10 m-5">
      <h2 className="text-5xl font-bold text-center mb-5" data-aos="fade-right">Latest Arrival</h2>
      <p className="text-md font-semibold text-center mb-4" data-aos="fade-left">Grab the latest collection of different category toy without any waiting list.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
        <div className="card bg-gradient-to-r bg-[#63898C] rounded-tr-none rounded-bl-none flex flex-col justify-center items-center" data-aos="zoom in">
          <img
            src="https://i.ibb.co/1sDwgGc/616-Qz-V1-Cl-HL-removebg-preview.png"
            alt="Toy 1"
            className="object-fit"
            
          />
           <BsCartPlus  className="h-8 w-8 hover:text-white cursor-pointer mb-3"></BsCartPlus>
        </div>
        <div className="card bg-[#63898C]  rounded-tr-none rounded-bl-none flex flex-col justify-center items-center">
          <img
            src="https://i.ibb.co/g4L7Gsm/01b07e24-db47-41d4-90ab-af8905990417-37f0379c585e9d9f669c4ec7ec40f28e-removebg-preview.png"
            alt="Toy 2"
            className="object-fit"
            data-aos="zoom in"
          />
            <BsCartPlus className="h-8 w-8 hover:text-white cursor-pointer mb-3"></BsCartPlus>
        </div>
        <div className="card bg-gradient-to-r bg-[#63898C] rounded-tr-none rounded-bl-none flex flex-col justify-center items-center">
          <img
            src="https://i.ibb.co/x5vxZfp/1576608977-lego-boost-1572974211-removebg-preview.png"
            alt="Toy 3"
            className="object-fit"
            data-aos="zoom in"
          />
          <BsCartPlus className="h-8 w-8 hover:text-white cursor-pointer mb-3"></BsCartPlus>
        </div>
      </div>
    </div>
  );
};

export default LatestToy;
