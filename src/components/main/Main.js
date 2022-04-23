import { Routes, Route, } from "react-router-dom";
import { Home } from "../home/Home";
import { Favorites } from "../favorites/Favorites"

 // TODO: ERROR PAGE 
 
export const Main = () => {
    return (
        <div className="Main">
            <Routes>
                

                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/favorites" element={<Favorites />} />
       
                <Route path="*" element={<Home />} />
            </Routes>
        </div>
    );
} 