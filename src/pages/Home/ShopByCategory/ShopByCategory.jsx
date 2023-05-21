/*  import { useEffect, useState } from "react"; */
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import MathTab from "../MathTab/MathTab";
import EngineeringTab from "../EngineeringTab/EngineeringTab";
import ScienceTab from "../ScienceTab/ScienceTab";

const ShopByCategory = () => {
/*    const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("");
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:5000/alltoys/${tabIndex}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setToys(result);
      });
  }, [tabIndex]); */
 
  return (
    <div className="lg:mx-32 lg:my-10 m-5">
    <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
    <Tabs>
      <TabList className="flex justify-center">
        <Tab className="px-4 py-2 border bg-purple-700 rounded-lg m-2 cursor-pointer hover:bg-purple-400">
          Math Toys
        </Tab>
        <Tab className="px-4 py-2 border bg-purple-700 rounded-lg m-2 cursor-pointer hover:bg-purple-300">
          Engineering Toys
        </Tab>
        <Tab className="px-4 py-2 border bg-purple-700 rounded-lg m-2 cursor-pointer hover:bg-purple-300">
          Science Toys
        </Tab>
      </TabList>

      <TabPanel>
        <MathTab></MathTab>
      </TabPanel>

      <TabPanel>
        <EngineeringTab></EngineeringTab>
      </TabPanel>
      <TabPanel>
        <ScienceTab></ScienceTab>
      </TabPanel>
    </Tabs>
  </div>
  );
};

export default ShopByCategory;
