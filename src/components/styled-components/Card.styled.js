import styled from "styled-components"


export const Card = styled.div`
    background-color: ${({ theme }) => theme.bgCard};
    
    text-align: center;
    padding: 5px;
    border: 1px solid #DCDCDC;
    border-radius: 5px;

    &:hover {
        cursor: ${({ hover }) => hover ? "pointer" : " "} ;
        transform: ${({ hover }) => hover ? "scale(1.1)" : " "} ;
        transition: ${({ hover }) => hover ? "all 0.1s linear" : " "} ;;
    }

 

    
`