import Banner from "../Banner/Banner";
import Gallary from "../Gallary/Gallary";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <Gallary></Gallary>
            <div className="my-20"></div>
            <ShopByCategory></ShopByCategory>
        </div>
    );
};

export default Home;