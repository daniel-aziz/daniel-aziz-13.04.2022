
import { Container } from "../../styled-components/Container.styled";



export const CurrentWeather = ({name, metric, imperial}) => {


    return (
        <Container>
            name: {name}
            weather: {metric}
        </Container>
    );
} 