import styled from "styled-components";

export const FeaturesContainer = styled.div `
    display:flex;
    flex-direction : column;
    justify-content : center;
    align-items: center;
    padding : 15px 200px;
    gap: 60px;
    box-sizing: border-box;
    margin-bottom : 100px;
    @media ( max-width : 768px) {
        padding: 20px;
    }
`;
export const FeaturesHeader = styled.div `
    display:flex;
    flex-direction: column;
    justify-content : center;
    align-items: center;
`;
export const FeatursTitle = styled.h1 `
    margin: 0; // reset browser default
    font-size: 4rem;
    background: linear-gradient(to right, blue, #B0E0E6); 
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text; 
    color: transparent;
    @media ( max-width : 990px) {
        text-align:center;
    }
    
`;
export const FeatureSubTitle = styled.p`
    color : gray;
    font-weight : bold;
    @media ( max-width : 990px) {
        text-align:center;
    }
`;
export const TwoByThreeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);  
  grid-template-rows: repeat(2, auto);   
  gap: 20px;

  /* For screens between 768px and 990px */
  @media (min-width: 990px) and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);  
    grid-template-rows: repeat(3, auto);  
  }

  /* For smaller screens (max-width: 768px) */
  @media (max-width: 990px) {
    grid-template-columns: 1fr;  
    grid-template-rows: repeat(6, auto);  
  } 
`;


