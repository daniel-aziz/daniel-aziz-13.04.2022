import { useSelector } from "react-redux";
import {Container} from "../../styled-components/Container.styled"
import { H1Styled } from "../../styled-components/H1.styled";

export const CurrentDescription = () => {

    const currentCity = useSelector(state => state.city.value);

    return (
        <Container>
            <H1Styled>
                <span>{currentCity.description}</span>
            </H1Styled>
        </Container>
    );
} 