import styled from "styled-components";

export const Page = styled.div`
  background-color: #343338;
  color: #fff;
  min-height: 100vh;
  padding: 50px 20px;
  font-family: "Poppins", sans-serif;
`;


export const Controls = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  margin-bottom: 45px;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: center;
  }

  div {
    width: 100%;
    max-width: 280px;
  }
`;

export const CategorySelect = styled.select`
  background-color: #1a1a1a;
  color: #fff;
  padding: 12px 16px;
  border: 1px solid #333;
  font-size: 1rem;
  width: 100%;
  cursor: pointer;
  border-radius: 6px;
  appearance: none;

  &:hover {
    background-color: #2a2a2a;
  }
`;

export const SearchInput = styled.input`
  background-color: #1a1a1a;
  color: #fff;
  padding: 12px 16px;
  border: 1px solid #333;
  font-size: 1rem;
  width: 100%;
  border-radius: 6px;

  &::placeholder {
    color: #888;
  }

  &:focus {
    outline: none;
    border-color: #ffcc00;
  }
`;

export const Grid = styled.section`
  display: grid;
  width: 100%;
  gap: 25px;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  justify-items: center;
`;

export const Card = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  width: 100%;
  max-width: 270px;
  border-radius: 10px;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  display: block;
  border-radius: 10px;
  transition: transform 0.4s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

export const HoverOverlay = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.45);
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  transition: opacity 0.3s ease;
  border-radius: 10px;

  ${Card}:hover & {
    opacity: 1;
  }
`;

export const HoverTitle = styled.h3`
  color: #fff;
  margin: 0;
`;

export const HoverText = styled.p`
  color: #fff;
  margin: 0;
  font-size: 0.9rem;
`;
