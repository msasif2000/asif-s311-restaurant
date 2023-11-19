import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../PopularMenu/MenuItem";



const MenuCategory = ({ items, title, coverImg }) => {
    const category = title?.toLowerCase();
    return (
        <div className="mt-12">
            {title && <Cover img={coverImg} title={title}> </Cover>}
            <div className="grid lg:grid-cols-2 p-4 gap-6">
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <Link to={`/order/${category}`}>
                <div className="flex justify-center my-2 ">
                    <button className="btn btn-sm border-b-2 border-b-slate-500 hover:border-b-red-500">Order Your Favorite Food</button>
                </div>
            </Link>
        </div>
    );
};

export default MenuCategory;