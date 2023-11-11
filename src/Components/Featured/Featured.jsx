import SectionTitle from "../ctionTitle/SectionTitle";
import img from '../../assets/home/featured.jpg'
import './Featured.css'


const Featured = () => {
    return (
        <div className=" my-8 featured-item text-white bg-fixed pt-12">
            <SectionTitle heading={'FROM OUR MENU'} subHeading={'---Check it out---'}></SectionTitle>
            <div className="bg-slate-500 bg-opacity-50 ">
                <div className="md:flex justify-center items-center gap-8 p-2  lg:px-36 px-16 py-12">
                    <div>
                        <img src={img} alt="" />
                    </div>
                    <div className="space-y-4">
                        <p>March 20, 2023
                            <p className="text-xl">WHERE CAN I GET SOME?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p></p>
                        <button className="btn btn-sm border-b-2 border-b-slate-500">ORDER NOW</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;