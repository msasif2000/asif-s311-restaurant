import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import s1 from '../../../assets/home/slide1.jpg';
import s2 from '../../../assets/home/slide2.jpg';
import s3 from '../../../assets/home/slide3.jpg';
import s4 from '../../../assets/home/slide4.jpg';
import s5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../ctionTitle/SectionTitle';


const Category = () => {
    return (
        <div>
            <SectionTitle subHeading={'---From 11:00am to 10:00pm---'} heading={'ORDER ONLINE'} ></SectionTitle>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper max-w-7xl mx-auto"
            >
                <SwiperSlide><img src={s1} alt="Slides"  className='flex justify-center mx-auto'/> <h3 className='uppercase -mt-16 pb-24 text-center font-bold text-xl text-white'>Salads</h3></SwiperSlide>
                <SwiperSlide><img src={s2} alt="Slides"  className='flex justify-center mx-auto'/> <h3 className='uppercase -mt-16 pb-24 text-center font-bold text-xl text-white'>Pizzas</h3></SwiperSlide>
                <SwiperSlide><img src={s3} alt="Slides"  className='flex justify-center mx-auto'/> <h3 className='uppercase -mt-16 pb-24 text-center font-bold text-xl text-white'>Soups</h3></SwiperSlide>
                <SwiperSlide><img src={s4} alt="Slides"  className='flex justify-center mx-auto'/> <h3 className='uppercase -mt-16 pb-24 text-center font-bold text-xl text-white'>Deserts</h3></SwiperSlide>
                <SwiperSlide><img src={s5} alt="Slides"  className='flex justify-center mx-auto'/> <h3 className='uppercase -mt-16 pb-24 text-center font-bold text-xl text-white'>Salads</h3></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;