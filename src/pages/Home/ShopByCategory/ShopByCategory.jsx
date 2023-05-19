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
    <div>
      <Tabs /* selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} */>
        <TabList>
          <Tab>Math Toys</Tab>
          <Tab>Engineering Toys</Tab>
          <Tab>Science Toys</Tab>
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
