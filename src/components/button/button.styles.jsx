import styled from "styled-components";

export const BaseButton = styled.button`
    border-radius : 5px;
    padding : 10px 15px;
    border: none;
    min-width : 150px;
    background: none;
    color: black;
    font-size : 1rem;
    &:hover{
        background-color : gray;
    }
`;
export const SecondaryButton = styled(BaseButton)`
    background-color : blue;
    color: white;
    &:hover{
        background-color : purple;
    }
`;

export const WelcomeButton = styled(SecondaryButton)`
    background-color : blue;
    color: white;
    font-size: 1.25rem;
    padding : 20px;
    &:hover {
        background :  linear-gradient(135deg, #3b82f6, #a855f7);;
        transform: translateY(-8px);  // moves card slightly up
        box-shadow: 0 20px 20px #c9c7c7;  // soft shadow below and sides
      }
`;