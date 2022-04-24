
import { Current } from "./Current";
import { HomeStyled } from "../styled-components/Home.styled";
import { SearchBar } from "./SearchBar";

export const Home = () => {
    return (
        <HomeStyled>
            <SearchBar/>
            <Current/>
        </HomeStyled>
    );
} 

