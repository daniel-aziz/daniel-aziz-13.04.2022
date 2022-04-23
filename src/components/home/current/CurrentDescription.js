import { useSelector } from "react-redux";
import {Container} from "../../styled-components/Container.styled"

export const CurrentDescription = () => {

    const currentCity = useSelector(state => state.city.value);

    return (
        <Container>
            <p>
                Info: {currentCity.description}
            </p>
        </Container>
    );
} 