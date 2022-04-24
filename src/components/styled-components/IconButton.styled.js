import styled from "styled-components"


export const IconButton = styled.button`
    background-color: ${({ bgActive, theme }) => bgActive ?  theme.buttonBg : "inherit" };
    color: ${({ theme, color }) => color ? color : theme.text};
    
    border-radius: 10px;
    
    border: none;
    font-size: ${props => props.size ? props.size : "1.5rem"};
    padding: 5px;

    &:hover {
        transform: scale(1.1);
        transition: all 0.1s linear;
    }

    a,  a:visited, a:hover, a:active {
        color: inherit;
    }

    
`