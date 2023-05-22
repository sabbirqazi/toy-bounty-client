/*  import { useEffect, useState } from "react"; */
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import MathTab from "../MathTab/MathTab";
import EngineeringTab from "../EngineeringTab/EngineeringTab";
import ScienceTab from "../ScienceTab/ScienceTab";
import { useState } from "react";

const ShopByCategory = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="lg:mx-32 lg:my-10 m-5">
    <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
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
        <MathTab tabIndex={tabIndex}></MathTab>
      </TabPanel>

      <TabPanel>
        <EngineeringTab tabIndex={tabIndex}></EngineeringTab>
      </TabPanel>
      <TabPanel>
        <ScienceTab tabIndex={tabIndex}></ScienceTab>
      </TabPanel>
    </Tabs>
  </div>
  );
};

export default ShopByCategory;
