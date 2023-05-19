/* import { useEffect, useState } from "react"; */
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
/* import CategoryToy from "../CategoryToy/CategoryToy"; */
import MathTab from "../MathTab/MathTab";

const ShopByCategory = () => {
/*   const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/alltoys/${activeTab}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setToys(result);
      });
  }, [activeTab]);
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  }; */
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>
            Math Toys
          </Tab>
          <Tab >
            Engineering Toys
          </Tab>
          <Tab >
            Science Toys
          </Tab>
        </TabList>

        <TabPanel>
         <MathTab></MathTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
