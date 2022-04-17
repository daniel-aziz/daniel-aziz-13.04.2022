import { Routes, Route, } from "react-router-dom";
import { Home } from "../home/Home";
import { Favorites } from "../favorites/Favorites"

export const Main = () => {
    return (
        <div className="Main">
            <Routes>
                <Route path="*" element={<Home />} />

                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/favorites" element={<Favorites />} />
            </Routes>
        </div>
    );
} 