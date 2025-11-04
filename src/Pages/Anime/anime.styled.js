import styled from "styled-components";

export const AnimePage = styled.div`
  background-color: #343338;
  color: #fff;
  min-height: 100vh;
  padding: 40px 20px;
  font-family: "Poppins", sans-serif;
`;

export const Controls = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  width: 100%;
  margin-bottom: 45px;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: center;
  }

  div {
    width: 100%;
    max-width: 300px;
  }
`;

export const CategorySelect = styled.select`
  background-color: #242424;
  color: #fff;
  padding: 12px 16px;
  border: 1px solid #333;
  font-size: 1rem;
  width: 100%;
  cursor: pointer;
  border-radius: 6px;
  appearance: none;

  &:hover {
    background-color: #2f2f2f;
  }
`;

export const SearchInput = styled.input`
  background-color: #242424;
  color: #fff;
  padding: 12px 16px;
  border: 1px solid #333;
  font-size: 1rem;
  width: 100%;
  border-radius: 6px;

  &::placeholder {
    color: #777;
  }

  &:focus {
    outline: none;
    border-color: #ffcc00;
  }
`;

export const AnimeGrid = styled.section`
  display: grid;
  width: 100%;
  gap: 25px;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  justify-items: center;
`;


export const AnimeCard = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  width: 100%;
  max-width: 270px;
  border-radius: 10px;
`;

export const AnimeImage = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  display: block;
  border-radius: 10px;
  transition: transform 0.4s ease;

  ${AnimeCard}:hover & {
    transform: scale(1.05);
  }
`;

export const HoverOverlay = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.45);
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  transition: opacity 0.3s ease;
  border-radius: 10px;

  ${AnimeCard}:hover & {
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

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
  background-color: #1e1e1e;
  color: #fff;
  padding: 30px;
  max-width: 600px;
  width: 90%;
  position: relative;
  border-radius: 10px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 18px;
  background: #ff5a5a;
  border: none;
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
  padding: 6px 11px;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #ff1f1f;
  }
`;

export const AnimeDetailsTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 15px;
`;

export const AnimeDetailsText = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
`;
