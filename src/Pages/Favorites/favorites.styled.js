import styled from "styled-components";

export const FavoritesContainer = styled.div`
  padding: 40px;
  background-color: #343338;
  min-height: 75vh;
  color: #f1f1f1;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Card = styled.div`
  background-color: #2f2e33;
  width: 200px;
  border-radius: 12px;
  overflow: hidden;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 270px;
  object-fit: cover;
`;

export const CardTitle = styled.p`
  padding: 10px;
  font-weight: 600;
  color: #f1f1f1;
`;
