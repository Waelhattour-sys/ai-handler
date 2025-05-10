import styled from "styled-components";

export const ScreenshotsContainer = styled.div `
    display:flex;
    flex-direction : column;
    justify-content : center;
    align-items: center;
    padding : 60px 200px 100px;
    gap: 60px;
    box-sizing: border-box;
    margin-bottom : 100px;
    background-color  : #F0F8FF	; 
    @media ( max-width : 768px) {
        padding: 20px;
    }
`;
export const ScreenshotsHeader = styled.div `
    display:flex;
    flex-direction: column;
    justify-content : center;
    align-items: center;
`;
export const ScreenshotsTitle = styled.h1 `
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
export const ScreenshotsubTitle = styled.p`
    color : gray;
    font-weight : bold;
    @media ( max-width : 990px) {
        text-align:center;
    }
`;
export const TwoByTwoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);  
  grid-template-rows: repeat(2, auto);   
  gap: 20px;     
  @media ( max-width : 990px){
    grid-template-columns: repeat(1, 1fr);  
    grid-template-rows: repeat(4, auto);  
  }                            
`;

