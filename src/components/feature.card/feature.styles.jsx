import styled from "styled-components";

export const FeatureCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  width: 90%;
  box-sizing: border-box;
  @media (max-width: 990px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
    gap: 20px;
    width: 100%;
  }
`;
export const FeatureCardContainer = styled.div`
background-color: #f5f5f5;
border-radius: 16px;
padding: 20px;
display: flex;
flex-direction: column;
align-items: center;
gap: 15px;
width: 100%; /
box-sizing: border-box;
transition: all 0.3s ease;   // smooth transition

  &:hover {
    transform: translateY(-8px);  // moves card slightly up
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);  // soft shadow below and sides
  }
  @media (max-width: 990px) {
    padding: 15px;
    gap: 10px;
  }
`;
export const IconCircle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
export const FeatureCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const FeatureCrdTitle = styled.h1`
  margin: 0; // reset browser default
  font-size: 1rem;
  color: black;
  @media (max-width: 990px) {
    text-align: center;
  }
`;
export const FeatureCardSubTitle = styled.p`
  color: black;
  @media (max-width: 990px) {
    text-align: center;
  }
`;
