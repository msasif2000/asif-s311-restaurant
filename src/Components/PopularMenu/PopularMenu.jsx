
import SectionTitle from "../ctionTitle/SectionTitle";
import MenuItem from "./MenuItem";
import useMenu from "../../Hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    return (
        <div>
            <SectionTitle heading={'FROM OUR MENU'} subHeading={'---Check it out---'}></SectionTitle>
            <div className="grid lg:grid-cols-2 p-4 gap-6">
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="flex justify-center my-2 ">
                <button className="btn btn-sm border-b-2 border-b-slate-500 hover:border-b-red-500">View all items</button>
            </div>
        </div>
    );
};

export default PopularMenu;