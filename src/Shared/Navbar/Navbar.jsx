import { BiCart } from "react-icons/bi"; 
import { NavLink } from "react-router-dom";
import './Navbar.css'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useCart from "../../Hooks/useCart";

const Navbar = () => {
    const { user, userLogout } = useContext(AuthContext);

    const handleLogout = () => {
        userLogout()
    }

    const [cart] = useCart();

    const navlinks =
        <>
            <li className=""><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/menu'>Our Menu</NavLink></li>
            <li><NavLink to='/order/salad'>Order Item</NavLink></li>
            <li><NavLink to='/cart'>
                <button className="btn text-2xl">
                    <BiCart />
                    <div className="badge badge-secondary">+{cart.length}</div>
                </button>
            </NavLink></li>
            {
                user ?
                    <li><button onClick={handleLogout} className="btn btn-sm">Sign Out</button></li>
                    :
                    <li><NavLink to='/login'>Sign in</NavLink></li>
            }
        </>
    return (
        <div className="fixed z-10 bg-opacity-30 bg-black w-full max-w-7xl mx-auto">
            <div className="navbar  text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="sty menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-orange-600 rounded-box w-52 ">
                            {navlinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">ASIF`s 311 <br /> RESTAURANT</a>
                </div>
                <ul className="navbar-center hidden lg:flex sty">
                    {navlinks}
                </ul>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;