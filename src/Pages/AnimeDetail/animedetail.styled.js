import styled from "styled-components";

export const DetailSection = styled.section`
  padding: 40px 60px;
  display: flex;
  justify-content: flex-start;
  background-color: #2f2e33;
  min-height: 75vh;
  color: #f1f1f1;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const AddButton = styled.button`
  padding: 10px 18px;
  color: #ffffff;
  background: transparent;
  border: 1px solid #ffffff;
  border-radius: 8px;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: fit-content;

  &:hover {
    transform: scale(1.1)
  }
`;
export const DetailContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 40px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const ImageBox = styled.div`
  flex-shrink: 0;
`;

export const AnimeImage = styled.img`
  width: 250px;
  height: 370px;
  border-radius: 12px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 200px;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 6px;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #ddd;
  line-height: 1.6;
  width: 100%;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;
