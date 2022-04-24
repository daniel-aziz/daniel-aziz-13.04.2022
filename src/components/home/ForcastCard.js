import { Card } from "../styled-components/Card.styled";
import { useSelector } from "react-redux";
import {BsSun, BsMoon} from "react-icons/bs"

export const ForcastCard = ({ item }) => {
    const currentPreferences = useSelector(state => state.preferences.value)

    
    return (
        <Card >
            <p>{item.dayName }</p>
            <p>{currentPreferences.metric ? item.metric.max: item.imperial.max} &#176; <BsSun/></p>
            <p>{currentPreferences.metric ? item.metric.min: item.imperial.min} &#176; <BsMoon/></p>
        </Card>
    );
} 