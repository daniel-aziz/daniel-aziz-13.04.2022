import { Container } from "../styled-components/Container.styled";
import { FavoriteCard } from "./FavoriteCard";


export const Favorites = () => {
    let daysData = [
        {
            city: "Tel Aviv",
            degree: 35,
            description : "Sunny"
        },
        {
            city: "New York",
            degree: 19,
            description : "Cloudy"
        },
    ]

    const getFavorites = () => {
        return (
            <>
            {daysData.map((item, index)=>
                <FavoriteCard key={index} item={item}/>
            )}
            </>
        )
    }

    return (
        <Container>
            {getFavorites()}
        </Container>
    );
} 