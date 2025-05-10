import styled from "styled-components";

export const WelcomeContainer = styled.div`
    display : flex; 
    flex-direction:row;
    gap : 5px;
    margin-bottom : 150px;
    @media (max-width: 990px) {
        display : flex; 
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        margin-bottom : 100px;
    }
`;
export const WelcomeMessageContainer =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-right:30px;
    @media (max-width: 990px) {
    padding: 20px;
     justify-content: center; 
     align-items:center;   
    }
`;
export const WelcomeMessageTitle = styled.h1 `
    font-size: 4rem;
    background: linear-gradient(to right, blue, #B0E0E6); 
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text; 
    color: transparent; 
    @media (max-width: 990px) {
        font-size: 3rem;
        text-align: center;
    }
`;
export const WelcomeMessageSubTitle = styled.p`
    max-width: 500px;
    font-size: 1.5rem;
    color : gray;
    @media (max-width: 990px) {
        text-align: center;
    }
`;
export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left:90px;
    @media (max-width: 990px) {
        padding-left:0px;
    }
`;
export const StyledImage = styled.img`
    max-width: 400px;
    border-radius : 20px;
    transition: all 0.3s ease;   // smooth transition

  &:hover {
    transform: translateY(-8px);  // moves card slightly up
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);  // soft shadow below and sides
  }
`;