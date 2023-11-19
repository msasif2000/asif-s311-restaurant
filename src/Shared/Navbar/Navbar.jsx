import { NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {

    const navlinks =
        <>
            <li className=""><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/menu'>Our Menu</NavLink></li>
            <li><NavLink to='/order/salad'>Order Item</NavLink></li>
            <li><NavLink to='/login'>Login</NavLink></li>
            <li><NavLink to='/register'>Register</NavLink></li>
        </>
    return (
        <div className="fixed z-10 bg-opacity-30 bg-black w-full max-w-7xl mx-auto">
            <div className="navbar  text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="sty menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
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