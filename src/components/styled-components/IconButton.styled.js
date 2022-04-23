import styled from "styled-components"


export const IconButton = styled.button`
    background-color: inherit;
    border: none;
    font-size: ${props => props.size ? props.size :"1rem"};

    &:hover {
        transform: scale(1.1);
    }
`