import { useEffect, useState } from "react";
import SectionTitle from "../ctionTitle/SectionTitle";
import MenuItem from "./MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('Menu.json')
            .then(res => res.json())
            .then(data => {
                const popularMenu = data.filter(item => item.category === 'popular');
                setMenu(popularMenu)})
            }, [])
        return (
            <div>
                <SectionTitle heading={'FROM OUR MENU'} subHeading={'---Check it out---'}></SectionTitle>
                <div className="grid lg:grid-cols-2 p-4 gap-6">
                    {
                        menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                    }
                </div>
            </div>
        );
    };

    export default PopularMenu;