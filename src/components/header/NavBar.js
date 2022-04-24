import { IoHomeOutline } from 'react-icons/io5';
import { MdOutlineFavorite } from "react-icons/md"
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IconButton } from '../styled-components/IconButton.styled';
import { NavBarStyled } from '../styled-components/NavBar.styled';
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md"
import { changeDarkMode, changeMetric } from '../../redux/preferencesReducer';
import { useLocation } from 'react-router-dom'
import notify from '../../utils/Notify';


export const NavBar = () => {
    const currentPreferences = useSelector(state => state.preferences.value);

    const dispach = useDispatch();
    const location = useLocation();

    const toggleDarkMode = () => {
        dispach(changeDarkMode())
    }

    const toggleMetric = () => {
        dispach(changeMetric())
        if (currentPreferences.metric) {
            notify.success("Changed to Fahrenheit!")
        } else notify.success("Changed to Celsius!")

    }

    return (
        <NavBarStyled>
            <ul>
                <li>
                    <IconButton
                        bgActive={location.pathname === "/home" || location.pathname === "/"}>
                        <Link to="/home"><IoHomeOutline /></Link>
                    </IconButton >
                </li>
                <li>
                    <IconButton
                        bgActive={location.pathname === "/favorites"}>
                        <Link to="/favorites">
                            <MdOutlineFavorite />
                        </Link>
                    </IconButton >
                </li>
                <li>
                    <IconButton
                        onClick={toggleDarkMode} >
                        {currentPreferences.darkMode ? <MdOutlineDarkMode /> : <MdDarkMode />}
                    </IconButton>
                </li>
                <li>
                    <IconButton onClick={toggleMetric}>
                        <span>{currentPreferences.metric ? "F" : "C"} &#176;</span>
                    </IconButton>
                </li>
            </ul>

        </NavBarStyled>
    );
} 