import { Card } from "../../styled-components/Card.styled";


export const DayCard = ({ item }) => {
    const { day , degree } = item;

    return (
        <Card>
            <br />
            <span>{day }</span>
            <br />
            <span>{degree} &#176; </span>
        </Card>
    );
} 