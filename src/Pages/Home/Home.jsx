import Banner from "../../Components/Banner/Banner";
import Category from "../../Components/Banner/Category/Category";
import Featured from "../../Components/Featured/Featured";
import PopularMenu from "../../Components/PopularMenu/PopularMenu";
import Testimonials from "../../Components/Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <div className="w-full">
                <Banner></Banner>
            </div>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;