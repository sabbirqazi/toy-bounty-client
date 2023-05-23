import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import Gallary from "../Gallary/Gallary";
import LatestToy from "../LatestToy/LatestToy";
import Offer from "../Offer/Offer";
import ShopByCategory from "../ShopByCategory/ShopByCategory";



const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>

            <Gallary></Gallary>
            <div className="my-20"></div>

            <ShopByCategory></ShopByCategory>
            <Offer></Offer>
            <LatestToy></LatestToy>
            
        </div>
    );
};

export default Home;