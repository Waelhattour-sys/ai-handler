import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledNav = styled.div`
    display : flex ;
    flex-direction : row ;
    justify-content: space-between;
    top: 0;
    padding :  15px 200px;
    font-family: ${({ theme }) => theme.fonts.main};
    @media ( max-width : 768px){
        justify-content: center;
        padding:20px;

    }
`;
export const StyledTitle = styled.h2`
    font-size : 1rem;
    color: black;
`;
export const StyledLogoContainer = styled(Link)`
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: row; 
    justify-content : flex-start; 
    align-items: center;
    gap: 15px;
`;
export const StyledLinksContainer = styled.div`
    display: flex;
    flex-direction: row; 
    justify-content : flex-start; 
    align-items: center;
    gap: 25px;
`;