import {Container} from "../../styled-components/Container.styled"

export const CurrentDescription = ({description}) => {
    return (
        <Container>
            <p>
                Info: {description}
            </p>
        </Container>
    );
} 