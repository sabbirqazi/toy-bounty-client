import { BsCartPlus } from "react-icons/bs";
const LatestToy = () => {
  return (
    <div className="lg:mx-32 lg:my-10 m-5">
      <h2 className="text-2xl font-bold text-center mb-5">Latest Arrival</h2>
      <p className="text-md font-semibold text-center mb-4">Grab the latest collection of different category toy without any waiting list.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
        <div className="card bg-gradient-to-r from-rose-300 to-orange-300 rounded-tr-none rounded-bl-none flex flex-col justify-center items-center">
          <img
            src="https://i.ibb.co/1sDwgGc/616-Qz-V1-Cl-HL-removebg-preview.png"
            alt="Toy 1"
            className="object-fit"
          />
           <BsCartPlus className="h-8 w-8 hover:text-white cursor-pointer mb-3"></BsCartPlus>
        </div>
        <div className="card bg-orange-300  rounded-tr-none rounded-bl-none flex flex-col justify-center items-center">
          <img
            src="https://i.ibb.co/g4L7Gsm/01b07e24-db47-41d4-90ab-af8905990417-37f0379c585e9d9f669c4ec7ec40f28e-removebg-preview.png"
            alt="Toy 2"
            className="object-fit"
          />
            <BsCartPlus className="h-8 w-8 hover:text-white cursor-pointer mb-3"></BsCartPlus>
        </div>
        <div className="card bg-gradient-to-r from-orange-300 to-rose-300 rounded-tr-none rounded-bl-none flex flex-col justify-center items-center">
          <img
            src="https://i.ibb.co/x5vxZfp/1576608977-lego-boost-1572974211-removebg-preview.png"
            alt="Toy 3"
            className="object-fit"
          />
          <BsCartPlus className="h-8 w-8 hover:text-white cursor-pointer mb-3"></BsCartPlus>
        </div>
      </div>
    </div>
  );
};

export default LatestToy;
