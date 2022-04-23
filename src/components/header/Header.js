import { HeaderStyled } from "../styled-components/Header.styled";
import { NavBar } from "./NavBar";
import {Title} from "./Title"


export const Header = () => {
    return (
        <HeaderStyled>
            <Title/>
            <NavBar/>
        </HeaderStyled>
    );
} 