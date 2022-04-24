import { useSelector } from "react-redux";
import { CardContainer } from "../styled-components/CardContainer.styled";
import { ForcastCard } from "./ForcastCard";


export const CurrentForcast = () => {
    const currentCity = useSelector(state => state.city.value);

    return (
        <CardContainer>
            {currentCity.forcast.map((item, index) => <ForcastCard key={index} item={item} />)}
        </CardContainer>
    );
} 