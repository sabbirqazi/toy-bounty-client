import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Offer = () => {


    useEffect(() => {
        AOS.init({
          duration: 1200,
        });
        AOS.refresh();
      }, []);
    
  return (
    <div className="my-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-[#A7D1D2] rounded-lg p-4 mb-4">
        <div className="w-1/2" >
          <img
            src="https://i.ibb.co/V93g5Kg/144-1442203-happy-boy-with-a-shopping-shopping-toys-clip-removebg-preview.png"
            alt="Offer"
            className="object-cover w-full"
            data-aos="fade-right"
          />
        </div>
        <div className="w-1/2 md:pl-4">
          <h2 className="text-5xl font-bold mb-2">What We Offer!!!</h2>
          <hr className="mb-2 w-48  h-10" />
          <div className="flex flex-col mt-2 space-y-5">
            <div className="flex gap-3" data-aos="fade-left">
              <div>
                <img
                  src="https://i.ibb.co/DMPzbFK/icons8-gift-96.png"
                  alt="Feature 1"
                  className="object-cover  w-16 h-16 mb-2 md:mr-2"
                />
              </div>
              <div className=" flex flex-col">
                <h3 className="text-lg font-bold mb-1">Gift Vouchar</h3>
                <p className="text-sm">Get your free limited time gift deals like a pro. </p>
              </div>
            </div>
            <div className="flex gap-3" data-aos="fade-left">
              <div>
                <img
                  src="https://i.ibb.co/0XQ7tD9/icons8-art-prices-96.png"
                  alt="Feature 1"
                  className="object-cover  w-16 h-16 mb-2 md:mr-2"
                />
              </div>
              <div className=" flex flex-col">
                <h3 className="text-lg font-bold mb-1">Customizable Purchase Eas</h3>
                <p className="text-sm">Custom built variation swatches – use image, color or label </p>
              </div>
            </div>
            <div className="flex gap-3" data-aos="fade-left">
              <div>
                <img
                  src="https://i.ibb.co/DfCDmJM/icons8-low-price-96.png"
                  alt="Feature 1"
                  className="object-cover  w-16 h-16 mb-2 md:mr-2"
                />
              </div>
              <div className=" flex flex-col">
                <h3 className="text-lg font-bold mb-1">Flash Sale at Low Price</h3>
                <p className="text-sm">Upto 50% discount flash sale offer in Black Friday</p>
              </div>
            </div>
            <div className="flex gap-3" data-aos="fade-left">
              <div>
                <img
                  src="https://i.ibb.co/dGwxRp3/icons8-delivery-96.png"
                  alt="Feature 1"
                  className="object-cover w-16 h-16  mb-2 md:mr-2"
                />
              </div>
              <div className=" flex flex-col">
                <h3 className="text-lg font-bold mb-1">Free Home Delivery</h3>
                <p className="text-sm">Free Home Delivery available all around the world.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
