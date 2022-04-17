import { Card } from "../styled-components/Card.styled";


export const FavoriteCard = ({ item }) => {
    const { city, degree, description } = item;

    return (
        <Card>
            <br />
            <span>{city}</span>
            <br />
            <span>{degree} &#176; </span>
            <br />
            <span> {description} </span>
            <br />
        </Card>
    );
} 