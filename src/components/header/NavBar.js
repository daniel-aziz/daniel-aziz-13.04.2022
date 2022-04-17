import { IoHomeOutline } from 'react-icons/io5';
import { MdOutlineFavorite } from "react-icons/md"
import { Link } from 'react-router-dom';
import { NavBarStyled } from '../styled-components/NavBar.styled';


export const NavBar = () => {
    return (
        <NavBarStyled>
            <ul>
                <li><Link to="/home"><IoHomeOutline /></Link></li>
                <li><Link to="/favorites"><MdOutlineFavorite /></Link></li>
            </ul>
        </NavBarStyled>
    );
} 