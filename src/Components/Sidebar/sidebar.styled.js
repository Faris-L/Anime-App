import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Overlay = styled.div`
  position: fixed;
  inset: 69px 0 0 0;            
  background: rgba(0, 0, 0, 0.4);
  opacity: ${(p) => (p.$open ? 1 : 0)};
  pointer-events: ${(p) => (p.$open ? "auto" : "none")};
  transition: opacity 0.25s ease;
  z-index: 24;

  @media (min-width: 768px) {
    display: none;    
  }           
`;

export const Aside = styled.aside`
  position: fixed;
  top: 69px;                    
  left: 0;
  height: calc(100vh - 69px);
  width: 150px;
  background: #343338;
  color: #fff;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  padding: 16px 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  z-index: 25;
  border-right: 1px solid white;


  transform: translateX(${(p) => (p.$open ? "0" : "-100%")});
  transition: transform 0.25s ease;

  @media (min-width: 768px) {
    transform: none;        
  }

 @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Item = styled(NavLink)`
  display: flex;
  align-items: center;
  font-size: 13px;
  height: 44px;
  border-radius: 8px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 500;
  transition: all 0.15s ease-in-out;


  &:hover {
    transform: translateX(5.5px);
  }

  &.active {
    color: #fff;
    font-size: 18px;
    font-weight: 600;
  }
`;
