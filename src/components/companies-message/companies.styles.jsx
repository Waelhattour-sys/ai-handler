import styled from "styled-components";

export const CompaniesContainer = styled.div`
    display:flex; 
    flex-direction: column;
    justify-content : center ; 
    align-items: center ; 
    gap: 5px;
    margin-bottom : 100px;
    
`;
export const CompaniesNamesContainer = styled.div`
    display:flex; 
    flex-direction: row;
    justify-content : center ; 
    align-items: center ; 
    gap: 70px;
    @media( max-width : 768px){
        flex-direction: column;
        gap:10px;
    }
`;
export const CompanyName = styled.h2`
    font-weight: bold;
    color : gray;
`;