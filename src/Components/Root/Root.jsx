import { Outlet } from "react-router-dom";
import Banner from "../Banner/Banner";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";


const Root = () => {
    return (
        <div>
            <div className=" mx-auto ">
                <div className="absolute top-5 z-10 w-full mx-8 -ml-6 pl-6"><NavBar></NavBar></div>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;