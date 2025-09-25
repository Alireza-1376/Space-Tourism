
const Home = ({showMenu}) => {
    return (
        <div className="overflow-hidden  relative pt-36 bg-[url('/home/background-home-mobile.jpg')] bg-center sm:bg-[url('/home/background-home-tablet.jpg')] md:bg-[url('/home/background-home-desktop.jpg')] w-full h-screen bg-no-repeat bg-cover">
            <div className={`${showMenu ? "blur md:blur-0" : "blur-0"} md:px-20 md:mt-48 text-white mt-6 flex flex-col md:flex-row justify-between items-center gap-x-16`}>
                <div className="md:w-1/2 ">
                    <p className="text-center md:text-start text-blue-300">SO, YOU WANT TO TRAVEL TO</p>
                    <h1 className="text-center md:text-start text-8xl my-8">SPACE</h1>
                    <p className="text-center md:text-start text-blue-300 px-6 md:px-0">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>
                <div className="flex justify-center md:justify-end md:items-start mt-16 md:mt-0 md:w-1/2 cursor-pointer">
                    <p className="text-black bg-white w-36 h-36 md:w-60 md:h-60 md:text-3xl rounded-full flex justify-center items-center text-2xl">EXPLORE</p>
                </div>
            </div>
        </div>
    )
}

export default Home;
