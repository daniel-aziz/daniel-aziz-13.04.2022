import styled from "styled-components"


export const Card = styled.div`
   display: inline-block;
    text-align: center;
    margin: 10px;
    padding: 5px;
    border: 1px solid gray;
    
    &:hover {
        cursor: ${({ hover }) => hover ? "pointer" : " "} ;
        transform: ${({ hover }) => hover ? "scale(1.1)" : " "} ;
        transition: all 0.1s linear;
    }


    
`