import { useState, useEffect } from "react";
import useAnimeByCategory from "../../queries/useAnimeByCategory";
import {Wrapper,Slide,Overlay,Info,ArrowLeft,ArrowRight, Dots,Dot, Empty} from "./heroslider.styled";

const HeroSlider = ({ category, interval = 4000 }) => {
  const { data = [], isLoading } = useAnimeByCategory(category, 5);
  const slides = data.filter((a) => a.img);

  const [index, setIndex] = useState(0);

  
  useEffect(() => {
    if (slides.length === 0) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, interval);
    return () => clearInterval(timer);
  }, [slides, interval]);

  const handlePrev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  const handleNext = () => setIndex((prev) => (prev + 1) % slides.length);

  if (isLoading) return <Empty>Loading...</Empty>;
  if (!slides.length) return <Empty>No slides found.</Empty>;

  return (
    <Wrapper>
      {slides.map((s, i) => (
        <Slide key={s.id} $bg={s.img} $active={i === index}>
          <Overlay />
          <Info >
            <h1>{s.title}</h1>
            <p>{s.episodeCount ? `Episodes: ${s.episodeCount} ` : "Unknown"}</p>
            {s.rating && <span>Rating: {s.rating}</span>}
          </Info>
        </Slide>
      ))}

      <ArrowLeft onClick={handlePrev}>❮</ArrowLeft>
      <ArrowRight onClick={handleNext}>❯</ArrowRight>

      <Dots>
        {slides.map((_, i) => (
          <Dot key={i} $active={i === index} onClick={() => setIndex(i)} />
        ))}
      </Dots>
    </Wrapper>
  );
};

export default HeroSlider;

