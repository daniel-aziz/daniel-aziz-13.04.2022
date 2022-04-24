import styled from "styled-components"


export const HeaderStyled = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 8vh;
    border-bottom: 1px solid #DCDCDC;
    margin-bottom: 5%;
    transition: all 0.50s linear;

    & > * {
        margin: 1%;
    }

    & > h1 {
        align-self: center;
    }

    @media (max-height: 500px) {
        display: none;
    }

    @media (max-width:300px) {
        flex-direction: column;
        text-align: center;
        height: 25vh;
        transition: all 0.50s linear;
    }

    @media (max-width:768px) {
        flex-direction: column;
        text-align: center;
        min-height: 20vh;
        transition: all 0.50s linear;
    }
`