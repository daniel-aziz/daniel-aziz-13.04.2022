import { DaysForcast } from "./DaysForcast";
import { Description } from "./Description";
import { FavBar } from "./FavBar";
import { LocationInfo } from "./LocationInfo";
import { Container } from "../../styled-components/Container.styled"
import { useSelector } from "react-redux";

export const LocationView = () => {
    const cityData = useSelector(state => state.city.value);

    function print() {
        console.log(cityData)
    }
    print()

    return (
        <Container>
           
            <FavBar />
            <LocationInfo />
            <Description />
            <DaysForcast forcast={cityData.forcast}/>
        </Container>
    );
} 