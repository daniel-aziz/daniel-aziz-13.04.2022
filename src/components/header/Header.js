import { HeaderStyled } from "../styled-components/Header.styled";
import { NavBar } from "./NavBar";

export const Header = () => {
    return (
        <HeaderStyled>
            <h1>Herolo Weather App</h1>
            <NavBar/>
        </HeaderStyled>
    );
} 