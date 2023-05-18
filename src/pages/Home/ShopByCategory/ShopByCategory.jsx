import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {
    const [toys, setToys] = useState([]);
    const [activeTab, setActiveTab] = useState("Math");


    useEffect(() => {
        fetch(`http://localhost:5000/allJobsByCategory/${activeTab}`)
          .then((res) => res.json())
          .then((result) => {
            setToys(result);
          });
      }, [activeTab]);
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
    return (
        <div>
              <Tabs>
    <TabList>
      <Tab  onClick={() => handleTabClick("Math")}
          className={` ${
            activeTab == "Math" ? " bg-danger text-white" : ""
          }`}
      >Math Toys</Tab>
      <Tab onClick={() => handleTabClick("Engineering")}
          className={`${
            activeTab == "Engineering" ? " bg-danger text-white" : ""
          }`}
      >Engineering Toys</Tab>
      <Tab onClick={() => handleTabClick("Science")}
          className={`${
            activeTab == "Science" ? " bg-danger text-white" : ""
          }`}
      >Science Toys</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 3</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ShopByCategory;