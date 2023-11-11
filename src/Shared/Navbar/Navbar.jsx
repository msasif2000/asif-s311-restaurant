import { NavLink } from "react-router-dom";


const Navbar = () => {

    const navlinks =
        <>
            <li className=""><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/d'>Item 3</NavLink></li>
        </>
    return (
        <div className="fixed z-10 bg-opacity-30 bg-black w-full">
            <div className="navbar  text-white max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">ASIF`s 311 <br /> RESTAURANT</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    {navlinks}
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;