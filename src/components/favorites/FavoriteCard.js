import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCity } from "../../redux/cityReducer";
import { Card } from "../styled-components/Card.styled";
import {BsSun } from "react-icons/bs"


export const FavoriteCard = ({ item }) => {
    const currentPreferences = useSelector(state => state.preferences.value)

    const dispach = useDispatch();
    let navigate = useNavigate();


    const setCurrCity = () => {
        dispach(setCity(item))
        navigate('/home')
    }

    return (
        <Card hover={true} onClick={setCurrCity}>
            <p>{item.name}</p>
            <p>{currentPreferences.metric ? item.metric : item.imperial} &#176; <BsSun/></p>
            <p>{item.description}</p>
        </Card>
    );
} 