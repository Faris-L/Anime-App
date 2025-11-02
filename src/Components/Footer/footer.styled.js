import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: #343338;
  color: #fff;
  text-align: center;
  padding: 20px 0;
  font-size: 14px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const Devide = styled.div`
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    border-bottom: 1px solid #d94abf;
    @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;               
    height: auto;             
    padding: 10px 0;
  }
`
export const ExternalLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-left: 5px;
  &:hover {
    text-decoration: underline;
  }
`;


export const NavLinks = styled.nav`
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 8px;
`;

export const StyledNavLink = styled(NavLink)`
  color: #FFFFFF;
  text-decoration: none;
  font-weight: 400;
  transition: color 0.2s ease;

  &:hover {
    text-decoration: underline;
  }
`;

export const Copyright = styled.p`
  color: #FFFFFF;
  font-weight: 300;
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  margin-top: 8px;    
  padding-top: 4px;                 
`;
export const Brand = styled.div`
    display: flex;
  align-items: center;
  cursor: pointer;
   min-height: 44px; 
   padding-inline: 20px;
   transform: translateY(-5px);
`
export const Logo = styled.img`
      width: 2.25rem;
  height: 2.25rem;
  object-fit: contain;
  display: block;
  transform: translateY(-2px);
`
export const Tittle = styled.h1`
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1; 
`