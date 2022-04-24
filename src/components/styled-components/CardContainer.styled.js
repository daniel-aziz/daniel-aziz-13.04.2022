import styled from "styled-components"


export const CardContainer = styled.div`
    
    margin: 10px 30px 10px 30px;
    display: grid;
    grid-gap: 1rem;
    justify-content: center;


    @media (min-width: 300px) {
        grid-template-columns: repeat(1, 1fr); 
    }

    @media (min-width: 600px) {
        grid-template-columns: repeat(2, 1fr); 
    }

    @media (min-width: 900px) {
        grid-template-columns: repeat(3, 1fr); 
    }

    @media (min-width: 1200px) {
        grid-template-columns: repeat(4, 1fr); 
    }

    @media (min-width: 1500px) {
        grid-template-columns: repeat(5, 1fr); 
    }

    
 

    
`