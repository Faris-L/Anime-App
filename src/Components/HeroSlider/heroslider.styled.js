import styled from "styled-components";

export const Slider = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  border-radius: 10px;
  background: #1f1f22;

  @media (max-width: 768px) {
    height: 260px;
  }
`;

export const Slide = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: ${(p) => (p.$active ? 1 : 0)};
  transform: ${(p) => (p.$active ? "scale(1)" : "scale(1.04)")};
  transition: opacity 0.9s ease, transform 0.9s ease;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: filter 0.4s ease;
  }

  /* Kad pređeš mišem — malo zatamni */
  &:hover img {
    filter: brightness(0.6);
  }

  /* Kad pređeš mišem — prikaži tekst */
  &:hover div {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const SlideInfo = styled.div`
  position: absolute;
  left: 40px;
  bottom: 60px;
  z-index: 5;
  color: #fff;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.7);
  opacity: 0; /* skriveno dok nije hover */
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;

  h2 {
    margin: 0 0 8px;
    font-size: clamp(1.6rem, 2.6vw, 2.4rem);
    font-weight: 700;
  }

  p {
    margin: 0;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    left: 16px;
    bottom: 30px;
  }
`;

export const Dots = styled.div`
  position: absolute;
  bottom: 14px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 20;
`;

export const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  background: ${(p) => (p.$active ? "#e451c6" : "#999")};
  transition: background 0.25s ease;

  &:hover {
    background: #e451c6;
  }
`;
