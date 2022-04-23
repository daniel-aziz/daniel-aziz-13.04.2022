
import { useSelector } from "react-redux";
import { Container } from "../../styled-components/Container.styled";



export const CurrentWeather = () => {
    const currentCity = useSelector(state => state.city.value);
    
    const currentPreferences = useSelector(state => state.preferences.value)

    return (
        <Container>
           <span> {currentCity.name}</span>
            <br/>
            <span> {currentPreferences.metric ? currentCity.metric: currentCity.imperial} &#176; </span>
        </Container>
    );
} 