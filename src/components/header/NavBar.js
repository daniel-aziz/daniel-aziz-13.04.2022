import { IoHomeOutline } from 'react-icons/io5';
import { MdOutlineFavorite } from "react-icons/md"
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IconButton } from '../styled-components/IconButton.styled';
import { NavBarStyled } from '../styled-components/NavBar.styled';
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md"
import { changeDarkMode, changeMetric } from '../../redux/preferencesReducer';


export const NavBar = () => {

    const cuurentPreferences = useSelector(state => state.preferences.value);
    const dispach = useDispatch();

    const toggleDarkMode = () => {

        dispach(changeDarkMode())
        console.log(cuurentPreferences)
    }

    const toggleMetric = () => {
        dispach(changeMetric())
    }

    return (
        <NavBarStyled>
            <ul>
                <li><Link to="/home"><IoHomeOutline /></Link></li>
                <li><Link to="/favorites"><MdOutlineFavorite /></Link></li>
            </ul>

            <IconButton onClick={toggleDarkMode}  >{cuurentPreferences.darkMode ? <MdOutlineDarkMode /> : <MdDarkMode />}</IconButton>
            <IconButton onClick={toggleMetric} >{cuurentPreferences.metric ? <span> F &#176; </span> : <span> C &#176; </span>}</IconButton>

        </NavBarStyled>
    );
} 