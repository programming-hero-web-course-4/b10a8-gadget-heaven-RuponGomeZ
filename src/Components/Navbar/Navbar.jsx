import { CiHeart } from "react-icons/ci";
import { TiShoppingCart } from "react-icons/ti";
import { Link, NavLink, useLocation } from "react-router-dom";



const NavBar = () => {
    const location = useLocation();
    return (
        <div className={location.pathname === '/' ? "navbar text-white " : "text-black navbar "}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <div
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black text-center">
                        <NavLink to={'/'}>Home</NavLink>
                        <NavLink to={"/statics"}>Statistics</NavLink>
                        <NavLink to={'/dashboard'}>Dashboard</NavLink>
                    </div>
                </div>
                <div className="btn btn-ghost text-xl">
                    <Link to={'/'}>Gadget Heaven
                    </Link>

                </div>
            </div>
            <div className="navbar-center hidden lg:flex gap-3">
                <div className="menu menu-horizontal px-1 mx-5 mr-5 flex gap-7">
                    <NavLink>Home</NavLink>
                    <NavLink to={"/statics"}>Statistics</NavLink>
                    <NavLink to={'/dashboard'}>Dashboard</NavLink>
                </div>
            </div>
            <div className="navbar-end">
                <div className="flex gap-3">
                    <div style={{ fontSize: '24px' }} className="hover:cursor-pointer border bg-white rounded-full text-black p-1">
                        <CiHeart />
                    </div>
                    <div className="hover:cursor-pointer border bg-white rounded-full text-black p-1" style={{ fontSize: '24px' }}>
                        <TiShoppingCart />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;