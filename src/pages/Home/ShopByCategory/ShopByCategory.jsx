import { useEffect, useState } from "react";
import Category from "../Category/Category";
import AOS from "aos";
import "aos/dist/aos.css";

const ShopByCategory = () => {
  const [activeTab, setActiveTab] = useState("Math");
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/alltoys1/${activeTab}`)
      .then((res) => res.json())
      .then((result) => {
        setToys(result);
      });
  }, [activeTab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
    AOS.refresh();
  }, []);
  const displayedToys = toys.slice(0, 2);

  return (
    <div className="lg:mx-32 lg:my-10 m-5">
      <h2
        className="text-5xl font-bold text-center mb-8"
        data-aos="fade-bottom"
      >
        Shop by Category
      </h2>
      <div data-aos="fade-bottom">
        <div className="flex justify-center">
          <div
            onClick={() => handleTabClick("Math")}
            className={`px-4 py-2 border rounded-lg m-2 cursor-pointer ${
              activeTab === "Math"
                ? "bg-[#015366] text-white"
                : "bg-[#E0F4F5] text-[#212A3E] hover:bg-[#A7D1D2]"
            }`}
          >
            Math Toys
          </div>
          <div
            onClick={() => handleTabClick("Engineering")}
            className={`px-4 py-2 border rounded-lg m-2 cursor-pointer ${
              activeTab === "Engineering"
                ? "bg-[#015366] text-white"
                : "bg-[#E0F4F5] text-[#212A3E] hover:bg-[#A7D1D2]"
            }`}
          >
            Engineering Toys
          </div>
          <div
            onClick={() => handleTabClick("Science")}
            className={`px-4 py-2 border rounded-lg m-2 cursor-pointer ${
              activeTab === "Science"
                ? "bg-[#015366] text-white"
                : "bg-[#E0F4F5] text-[#212A3E] hover:bg-[#A7D1D2]"
            }`}
          >
            Science Toys
          </div>
        </div>
        <hr />
        <div className="flex flex-col  gap-4 md:flex-row md:justify-center my-10">
          {displayedToys?.map((toy) => (
            <Category key={toy._id} toy={toy} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
