import { useRef, useState } from "react";
import Navbar from "./components/Navbar";
import "./index.css"
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";


const App = () => {
    const [showMenu, setShowMenu] = useState(false);
    const ref = useRef();

    function closeModal(e) {
        if (!ref.current.contains(e.target)) {
            setShowMenu(false)
        }
    }

    return (
        <div className="relative" onClick={(e) => { closeModal(e) }}>
            <div className="fixed right-0 left-0 top-0 z-10">
                <Navbar showMenu={showMenu} setShowMenu={setShowMenu} ref={ref} />
            </div>
            <Routes>
              <Route path="/" element={<Home showMenu={showMenu}/>}/>
            </Routes>
        </div>
    );
}

export default App;

