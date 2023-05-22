import "react-tabs/style/react-tabs.css";

import { useEffect, useState } from "react";
import Category from "../Category/Category";

const ShopByCategory = () => {
  const [activeTab, setActiveTab] = useState("Math");

  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/alltoys1/${activeTab}`)
      .then((res) => res.json())
      .then((result) => {
        /* console.log(result); */
        setToys(result);
      });
  }, [activeTab]);
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  const displayedToys = toys.slice(0, 2);
  return (
    <div className="lg:mx-32 lg:my-10 m-5">
      <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
      <div>
        <div className="flex justify-center">
          <div
            onClick={() => handleTabClick("Math")}
            className="px-4 py-2 border bg-purple-700 rounded-lg m-2 cursor-pointer hover:bg-purple-400"
          >
            Math Toys
          </div>
          <div
            onClick={() => handleTabClick("Engineering")}
            className="px-4 py-2 border bg-purple-700 rounded-lg m-2 cursor-pointer hover:bg-purple-300"
          >
            Engineering Toys
          </div>
          <div
            onClick={() => handleTabClick("Science")}
            className="px-4 py-2 border bg-purple-700 rounded-lg m-2 cursor-pointer hover:bg-purple-300"
          >
            Science Toys
          </div>
        </div>

        <div className="flex flex-col ml-3 gap-4 md:flex-row md:justify-center my-10">
          {displayedToys?.map((toy) => (
            <Category key={toy._id} toy={toy}></Category>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
