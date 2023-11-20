import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";


const Main = () => {
    const location =  useLocation();
    //console.log(location);

    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register');
    return (
        <div>

            <div className="md:container mx-auto">
                {noHeaderFooter || <Navbar></Navbar>}
                <Outlet></Outlet>
            </div>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;