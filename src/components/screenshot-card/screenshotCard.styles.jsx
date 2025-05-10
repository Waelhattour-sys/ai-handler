import styled from "styled-components";

export const ScreenshotCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 10px;
  width: 95%;
  box-sizing: border-box;
  @media (max-width: 768px) {
    width: 100%;
    grid-template-columns: 1fr;
    padding: 0 20px;
    gap: 20px;
  }
`;
export const ScreenshotCardContainer = styled.div `
background-color: #f5f5f5;
border-radius: 16px;
display: flex;
flex-direction: column;
align-items: center;
gap: 15px;
width: 100%; /
background-color: white;
box-sizing: border-box;
transition: all 0.3s ease;   // smooth transition

  &:hover {
    transform: translateY(-8px);  // moves card slightly up
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);  // soft shadow below and sides
  }
  @media (max-width: 768px) {
    padding: 15px;
    gap: 10px;
  }
`;


export const ScreenshotCardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px 12px 0px 0px;
  object-fit: cover;
  @media (max-width: 768px) {
    max-height: 200px;
  }
`;
export const ScreenshotCardHeader = styled.div `
    display:flex;
    margin-top:20px ;
    margin-bottom: 30px;
    flex-direction: column;
    justify-content : center;
    align-items: center;
`;
export const ScreenshotCrdTitle = styled.h1 `
    margin: 0; // reset browser default
    font-size: 1rem;
    color: blue; 
    @media ( max-width : 768px) {
      text-align:center;
  }
`;
export const ScreenshotCardSubTitle = styled.p`
    color : gray;
    @media ( max-width : 768px) {
      text-align:center;
  }
`;