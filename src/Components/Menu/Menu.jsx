import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuBg from '../../assets/menu/banner3.jpg'
import useMenu from '../../Hooks/useMenu';
import SectionTitle from '../ctionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import dessertBg from '../../assets/menu/dessert-bg.jpeg';
import pizzaBg from '../../assets/menu/pizza-bg.jpg';
import saladBg from '../../assets/menu/salad-bg.jpg';
import soupBg from '../../assets/menu/soup-bg.jpg';

const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered');
    const desserts = menu.filter(item => item.category === 'dessert');
    const pizzas = menu.filter(item => item.category === 'pizza');
    const salads = menu.filter(item => item.category === 'salad');
    const soups = menu.filter(item => item.category === 'soup');
    return (

        <div>
            <Helmet>
                <title>Asif`s Restaurant | Menu</title>
            </Helmet>
            <Cover img={menuBg} title={'our menu'}></Cover>
            <SectionTitle heading={'TODAY`S OFFER'} subHeading={'---Don`t miss---'}></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={desserts} title="Dessert" coverImg={dessertBg}></MenuCategory>
            <MenuCategory items={pizzas} title="Pizza" coverImg={pizzaBg}></MenuCategory>
            <MenuCategory items={salads} title="Salad" coverImg={saladBg}></MenuCategory>
            <MenuCategory items={soups} title="Soup" coverImg={soupBg}></MenuCategory>
        </div>
    );
};

export default Menu;