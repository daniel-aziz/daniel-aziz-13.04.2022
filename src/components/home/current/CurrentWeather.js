
import { useSelector } from "react-redux";
import { Container } from "../../styled-components/Container.styled";



export const CurrentWeather = () => {
    const currentCity = useSelector(state => state.city.value);
    
    const currentPreferences = useSelector(state => state.preferences.value)

    return (
        <Container>
            name: {currentCity.name}
            degree {currentPreferences.metric ? currentCity.metric: currentCity.imperial}
        </Container>
    );
} 