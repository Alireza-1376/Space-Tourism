import { useState } from "react";

const Home = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="overflow-hidden relative pt-8 bg-[url('/home/background-home-mobile.jpg')] bg-center sm:bg-[url('/home/background-home-tablet.jpg')] md:bg-[url('/home/background-home-desktop.jpg')] w-full h-screen bg-no-repeat bg-cover">
            <div id="navbar" className="flex items-center justify-between p-4 md:px-10 md:bg-white/20 ">
                <div>
                    <img src="/home/logo.svg" alt="" />
                </div>
                <nav className={`${showMenu ? "w-64 -translate-x-0" : "w-0 md:w-full translate-x-10 md:translate-x-0"} overflow-hidden transition-all duration-200 p-4 pt-16 gap-y-10 md:p-0 flex flex-col md:flex-row md:justify-end absolute z-10 right-0 top-0 md:static bg-gray-900/90 h-full md:bg-white/0`}>
                    <div onClick={()=>{setShowMenu(false)}} className="md:hidden flex justify-end cursor-pointer">
                        <img src="/home/icon-close.svg" alt="" />
                    </div>
                    <ul className="text-white flex flex-col md:flex-row gap-6 md:gap-10">
                        <li>
                            <a href="#" className="text-nowrap block py-1 md:flex md:py-0 ">00 HOME</a>
                        </li>
                        <li>
                            <a href="#" className="text-nowrap block py-1 md:flex md:py-0">01 DESTINATION</a>
                        </li>
                        <li>
                            <a href="#" className="text-nowrap block py-1 md:flex md:py-0">02 CREW</a>
                        </li>
                        <li>
                            <a href="#" className="text-nowrap block py-1 md:flex md:py-0">03 TECHNOLOGY</a>
                        </li>
                    </ul>
                </nav>
                <div onClick={() => { setShowMenu(true) }} className={`${showMenu ? "hidden" : "flex"} md:hidden cursor-pointer`}>
                    <img src="/home/icon-hamburger.svg" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Home;
