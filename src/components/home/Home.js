import { SearchBar } from "./SearchBar";
import { Current } from "./Current";
import { HomeStyled } from "../styled-components/Home.styled";

export const Home = () => {
    return (
        <HomeStyled>
            <SearchBar/>
            <Current/>
        </HomeStyled>
    );
} 

