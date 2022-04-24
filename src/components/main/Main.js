import { Routes, Route, Navigate} from "react-router-dom";
import { Home } from "../home/Home";
import { Favorites } from "../favorites/Favorites"

 
export const Main = () => {
    return (
        <>
        
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/favorites" element={<Favorites />} />
    
                <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
        </>
    );
} 