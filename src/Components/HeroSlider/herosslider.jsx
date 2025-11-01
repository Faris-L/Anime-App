import { useState, useEffect } from "react";
import { Link } from "react-router-dom";            
import useAnimeByCategory from "../../queries/useAnimeByCategory";
import { Slider, Slide, SlideInfo, Dots, Dot }  from "../HeroSlider/heroslider.styled"

export default function HeroSlider({ category = "shounen" }) {
  const { data = [], isLoading } = useAnimeByCategory(category);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((p) => (p + 1) % (data.length || 1));
    }, 4000);
    return () => clearInterval(t);
  }, [data.length]);

  if (isLoading || !data.length) return null;

  const slides = data.slice(0, 5);

  return (
    <Slider>
      {slides.map((a, i) => {
        const to = `/anime/${a.slug || a.id}`;       
        return (
          <Slide
            key={a.id}
            as={Link}                                  
            to={to}
            $active={i === index}
            aria-label={`Open ${a.title}`}
          >
            {a.poster && <img src={a.poster} alt={a.title} />}
            <SlideInfo>
              <h2>{a.title}</h2>
              <p>Episodes: {a.episodeCount ?? "?"}</p>
              <p>Rating: {a.rating ?? "N/A"}</p>
            </SlideInfo>
          </Slide>
        );
      })}

      <Dots>
        {slides.map((_, i) => (
          <Dot key={i} $active={i === index} onClick={() => setIndex(i)} />
        ))}
      </Dots>
    </Slider>
  );
}
