import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 45vh;
  overflow: hidden;
  border-radius: 6px;
  border-bottom: 20px solid #343338;
  box-shadow: 0 6px 15px rgba(0,0,0,0.2);;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.35);    
  transition: background .4s ease;
`;

const Info = styled.div`
  position: absolute;
  top: 10%;
  left: 6%;
  color: #fff;
  opacity: 0;
  transform: translateY(18px);
  transition: opacity .35s ease, transform .35s ease;
  text-shadow: 0 6px 30px rgba(0,0,0,.6);

  h1 { font-size: clamp(1.6rem, 4vw, 2.4rem); margin: 0 0 .5rem; }
  p  { margin: 0 0 .25rem; opacity: .9; }
  span { opacity: .85; }
`;

const Slide = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${(p) => p.$bg});
  background-size: cover;
  background-position: center;
  transition: opacity 1s ease, transform 2s ease;
  opacity: ${(p) => (p.$active ? 1 : 0)};
  transform: scale(${(p) => (p.$active ? 1 : 1.05)});
  pointer-events: ${(p) => (p.$active ? "auto" : "none")};
  z-index: ${(p) => (p.$active ? 2 : 1)};

  &:hover ${Info} {
    opacity: 1;
    transform: translateY(0);
  }
  &:hover ${Overlay} {
    background: rgba(0,0,0,0.55);  
  }
`;


const ArrowLeft = styled.button`
  position: absolute;
  /* left: 20px; */
  background: transparent;
  top: 50%;
  height: 100%;
  transform: translateY(-50%);
  border: none;
  font-size: 2rem;
  padding: 4px 10px;
  cursor: pointer;
  z-index: 7;
  transition: background .25s ease;
  &:hover { background: rgba(0, 0, 0, 0.2); }
`;

const ArrowRight = styled(ArrowLeft)`
  left: auto;
  right: 1px;
`;


const Dots = styled.div`
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 15px;
  z-index: 6;
  padding: 6px 10px;
  border-radius: 999px;
`;

const Dot = styled.button`
  width: 10px;
  height: 10px;
  border: 0;
  border-radius: 50%;
  background: ${(p) => (p.$active ? "#fff" : "rgba(255,255,255,0.5)")};
  box-shadow: 0 0 0 1px rgba(0,0,0,0.25);
  cursor: pointer;
  transition: transform .2s, background .2s;
  transform: scale(${(p) => (p.$active ? 1.1 : 1)});
`;


const Empty = styled.div`
  width: 100%;
  height: 70vh;
  display: grid;
  place-items: center;
  color: #ccc;
  background: #2f2e33;
`;

export {
  Wrapper,
  Slide,
  Overlay,   
  Info,
  ArrowLeft,
  ArrowRight,
  Dots,
  Dot,
  Empty,
};
