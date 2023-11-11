import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import b1 from '../../assets/home/01.jpg';
import b2 from '../../assets/home/02.jpg';
import b3 from '../../assets/home/03.png';
import b4 from '../../assets/home/04.jpg';
import b5 from '../../assets/home/05.png';
import b6 from '../../assets/home/06.png';
const Banner = () => {
    return (
        <Carousel autoPlay={true} axis={"vertical"} infiniteLoop={true} interval={2000} className="w-full text-center max-w-7xl mx-auto rounded-lg md:rounded-none">
            <div>
                <img src={b1} className="w-full"/>
            </div>
            <div>
                <img src={b2} className="w-full"/>
            </div>
            <div>
                <img src={b3} className="w-full"/>
            </div>
            <div>
                <img src={b4} className="w-full"/>
            </div>
            <div>
                <img src={b5} className="w-full"/>
            </div>
            <div>
                <img src={b6} className="w-full"/> 
            </div>
        </Carousel>
    );
};

export default Banner;