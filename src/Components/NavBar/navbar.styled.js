
import styled from "styled-components";
import { Burger as MantineBurger } from "@mantine/core";

export const Bar = styled.header`
  background: #343338;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30;
  color: white;
  height: 69px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid white;
`;

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
   min-height: 44px; 
   padding-inline: 20px;
   transform: translateY(2px);
`;

export const LogoImg = styled.img`
  width: 2.25rem;
  height: 2.25rem;
  object-fit: contain;
  display: block;
  transform: translateY(-2px);
`;

export const Brand = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1; 
`;


export const Burger = styled(MantineBurger)`
  &&{
     margin-right: 16px;
  --burger-color: #868E96;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
