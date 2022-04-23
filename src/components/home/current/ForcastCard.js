import { Card } from "../../styled-components/Card.styled";
import { useSelector } from "react-redux";
import { useEffect } from "react";


export const ForcastCard = ({ item }) => {
    const currentPreferences = useSelector(state => state.preferences.value)

    
    return (
        <Card>
            <br />
            <span>day: {item.dayName }</span>
            <br />
            <span>Max: {currentPreferences.metric ? item.metric.max: item.imperial.max} &#176; </span>
            <br />
            <span>Min: {currentPreferences.metric ? item.metric.min: item.imperial.min} &#176; </span>
        </Card>
    );
} 