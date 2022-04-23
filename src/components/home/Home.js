import { SearchBar } from "./search/SearchBar";
import { Current } from "./current/Current";

export const Home = () => {
    return (
        <div className="Home">
            <SearchBar/>
            <Current/>
        </div>
    );
} 