import { NavLink } from "react-router-dom";

const Navbar = ({showMenu ,ref ,setShowMenu}) => {
    return (
        <div id="navbar" className="flex items-center justify-between p-4 md:px-10 md:bg-white/20 mt-8">
            <div className={`${showMenu ? "blur md:blur-0" : "blur-0"}`}>
                <img src="/home/logo.svg" alt="" />
            </div>
            <nav ref={ref} className={`${showMenu ? "w-64  -translate-x-0 md:w-full md:translate-x-0" : "w-0 md:w-full translate-x-10 md:translate-x-0"} overflow-hidden transition-all duration-200 blur-0 p-4 pt-16 gap-y-10 md:p-0 flex flex-col md:flex-row md:justify-end absolute z-20 bottom-0 right-0 top-0 md:static bg-gray-900/90 h-screen md:h-full md:bg-white/0`}>
                <div className="md:hidden flex justify-end">
                    <img className="cursor-pointer" onClick={() => { setShowMenu(false) }} src="/home/icon-close.svg" alt="" />
                </div>
                <ul className="text-white flex flex-col md:flex-row gap-6 md:gap-10">
                    <li>
                        <NavLink to="/" className="text-nowrap block py-1 md:flex md:py-0 ">00 HOME</NavLink>
                    </li>
                    <li>
                        <NavLink to="/destination" className="text-nowrap block py-1 md:flex md:py-0">01 DESTINATION</NavLink>
                    </li>
                    <li>
                        <NavLink to="/crew" className="text-nowrap block py-1 md:flex md:py-0">02 CREW</NavLink>
                    </li>
                    <li>
                        <NavLink to="/technology" className="text-nowrap block py-1 md:flex md:py-0">03 TECHNOLOGY</NavLink>
                    </li>
                </ul>
            </nav>
            <div onClick={(e) => { e.stopPropagation(); setShowMenu(true) }} className={`${showMenu ? "hidden" : "flex"}  md:hidden cursor-pointer`}>
                <img src="/home/icon-hamburger.svg" alt="" />
            </div>
        </div>
    );
}

export default Navbar;
