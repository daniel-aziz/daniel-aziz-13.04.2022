import { Card } from "../../styled-components/Card.styled";


export const ForcastCard = ({ item }) => {
    return (
        <Card>
            <br />
            <span>{item.dayName }</span>
            <br />
            <span>Max: {item.metric.max} &#176; </span>
            <br />
            <span>Min: {item.metric.min} &#176; </span>
        </Card>
    );
} 