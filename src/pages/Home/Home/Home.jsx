import Banner from "../Banner/Banner";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="my-20"></div>
            <ShopByCategory></ShopByCategory>
        </div>
    );
};

export default Home;