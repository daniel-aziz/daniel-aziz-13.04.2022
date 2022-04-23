import { IoHomeOutline } from 'react-icons/io5';
import { MdOutlineFavorite } from "react-icons/md"
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IconButton } from '../styled-components/IconButton.styled';
import { NavBarStyled } from '../styled-components/NavBar.styled';
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md"
import { changeDarkMode, changeMetric } from '../../redux/preferencesReducer';


export const NavBar = () => {

    const currentPreferences = useSelector(state => state.preferences.value);
    const dispach = useDispatch();

    const toggleDarkMode = () => {
        dispach(changeDarkMode())
    }

    const toggleMetric = () => {
        dispach(changeMetric())
    }

    return (
        <NavBarStyled>
            <ul>
                <li>
                    <ul>
                        <li>
                            <IconButton onClick={toggleDarkMode}  >{currentPreferences.darkMode ? <MdOutlineDarkMode /> : <MdDarkMode />}</IconButton>
                        </li>
                        <li>
                            <IconButton onClick={toggleMetric} >{currentPreferences.metric ? <span> F &#176; </span> : <span> C &#176; </span>}</IconButton>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li>
                            <IconButton >    <Link to="/home"><IoHomeOutline /></Link></IconButton >
                        </li>
                        <li>
                            <IconButton >     <Link to="/favorites"><MdOutlineFavorite /></Link></IconButton >
                        </li>
                    </ul>
                </li>
            </ul>

        </NavBarStyled>
    );
} 