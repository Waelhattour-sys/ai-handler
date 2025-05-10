import styled from "styled-components";

export const StatisticsContainer = styled.div`
    display: grid;
    grid-template-columns : repeat(4,1fr);
    margin-bottom:30px;
    justify-content:center;
    padding :  20px 200px;
    gap: 20px;
    border-block: 1px solid gray;
    writing-mode: horizontal-tb;
    @media( max-width : 768px){
        grid-template-columns : repeat(1,1fr);
        grid-template-rows : repeat(4,auto);

    }
`;
export const StatisticSampleContainer = styled.div`
    display: flex; 
    flex-direction : column;
    justify-content: flex-start ; 
    align-items: center; 
    height: 100%; 
    text-align: center;
`;
export const StatisticsTitle = styled.h1 `
    color: blue;
    position: sticky;
    font-size: 4rem;
    @media( max-width : 768px){
        margin:0

    }
`;
export const StatisticsSubTitle = styled.p `
    color: gray;
    font-size: 1.2rem;
`;