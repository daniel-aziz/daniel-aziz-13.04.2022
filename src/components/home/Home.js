import { SearchBar } from "./search/SearchBar";
import {LocationView} from "./location/LocationView"

export const Home = () => {
    return (
        <div className="Home">
            <SearchBar/>
            <LocationView/>
        </div>
    );
} 