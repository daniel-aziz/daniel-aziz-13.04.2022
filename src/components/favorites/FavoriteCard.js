import { useDispatch, useSelector } from "react-redux";
import { setCity } from "../../redux/cityReducer";
import { removeFromFavorites } from "../../redux/favoritesReducer";
import { Card } from "../styled-components/Card.styled";
import { useNavigate } from "react-router-dom";
import { IconButton } from "../styled-components/IconButton.styled";
import { IoIosRemoveCircleOutline } from "react-icons/io"


export const FavoriteCard = ({ item }) => {
    const dispach = useDispatch();
    let navigate = useNavigate();
    const currentPreferences = useSelector(state => state.preferences.value)




    const setCurrCity = () => {
        dispach(setCity(item))
        navigate('/home')
    }

    return (

        <Card hover={true} onClick={setCurrCity}>

            <br />
            <span>{item.name}</span>
            <br />
            <span>{currentPreferences.metric ? item.metric: item.imperial} &#176; </span>
            <br />
            <span> {item.description} </span>
            <br />
            <IconButton size={"1.5rem"} onClick={() => { dispach(removeFromFavorites(item)) }}><IoIosRemoveCircleOutline /></IconButton>

        </Card>

    );
} 