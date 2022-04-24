import styled from "styled-components"


export const FormStyled = styled.form`
    display: flex;
    justify-content: center;



    p:hover {
        background-color: ${({theme})=> theme.bgSuggP};
        cursor: pointer;
    }


    .suggestions-input {
        box-sizing: border-box;
        width: 250px;
        font-size: 16px;
        padding: 14px 20px 10px 45px;
        border: none;
        border-radius: 5px;
        border-bottom: 1px solid #ddd;
        background-color: ${({theme})=> theme.bgSugg};
    }

    .suggestions-input:focus {
        outline: 3px solid #ddd;
    }

    .suggestions-box {
        position: absolute;
        width: 250px;
        overflow: hidden;
        border: 1px solid #ddd;
        z-index: 1;
        padding: 0;
        text-decoration: none;
        display: block;
        text-align: center;
        background-color: ${({ theme }) => theme.bgSugg};
    }
    
`