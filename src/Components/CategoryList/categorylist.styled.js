import styled from "styled-components";
import { Link } from "react-router-dom";

export const Section = styled.section`
  padding: 10px;
  width: 100%;
`;

export const TitleButton = styled(Link)`
  display: inline-block;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  padding: 10px 15px;
  color: #fff;
  text-decoration: none;
  transition: color 0.25s ease;
`;

export const Grid = styled.ul`
  list-style: none;
  padding: 7px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  overflow-x: auto;
  overflow-y: hidden;  
  gap: 20px;           

  @media (min-width: 769px) {
    overflow-x: hidden; 
  }
`

export const ItemButton = styled(Link)`
  display: block;
  border: none;
  outline: none;
  cursor: pointer;
  background: transparent;
  overflow: hidden;
  transition: transform 0.1s ease, box-shadow 0.25s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  }
`;

export const ItemImage = styled.img`
  width: 146.938px;
  height: 208px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${ItemButton}:hover & {
    transform: scale(1.05);
  }
`;
