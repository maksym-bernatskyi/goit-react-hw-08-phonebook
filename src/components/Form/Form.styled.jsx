import styled from "styled-components";

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    padding: 20px 0;
    border-radius: 10px;
    color: #000;
    background-color: rgba(244, 244, 246, 0.4);
    box-shadow: 2px 2px 23px 9px rgba(0, 0, 0, 0.39);
    @media screen and (max-width: 479px) {
        max-width: 300px;
    }
`;

export const ButtonSubmit = styled.button.attrs(() => ({ type: 'submit' }))`
    position: relative;
    display: inline-block;
    padding: 5px 10px;
    margin-top: 20px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1), 
        background-color 500ms cubic-bezier(0.4, 0, 0.2, 1);
    
        &:hover {
            border-color: #212529;
            color: #fff;
}
`;