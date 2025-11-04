import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAnimeByCategory from "../../queries/useAnimeByCategory";
import { getCategories } from "../../Services/appClient";
import {
  AnimePage,
  Controls,
  CategorySelect,
  SearchInput,
  AnimeGrid,
  AnimeCard,
  AnimeImage,
  HoverOverlay,
  HoverTitle,
  HoverText,
} from "./anime.styled";

export default function Anime() {
  const [category, setCategory] = useState("action");
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();
  const { data: animeList, isLoading, isError } = useAnimeByCategory(category);

  useEffect(() => {
    async function fetchCategories() {
      const cats = await getCategories();
      setCategories(cats);
    }
    fetchCategories();
  }, []);

  const filteredAnime = animeList?.filter((a) =>
    a.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) return <p style={{ textAlign: "center" }}>Loading anime...</p>;
  if (isError) return <p style={{ textAlign: "center" }}>Something went wrong!</p>;

  return (
    <AnimePage>
      <Controls>
        <div>
          <CategorySelect value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Choose a category...</option>
            {categories.map((cat, i) => (
              <option key={i} value={cat.toLowerCase()}>{cat}</option>
            ))}
          </CategorySelect>
        </div>

        <div>
          <SearchInput
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </Controls>

      {/* Anime Grid */}
      <AnimeGrid>
        {filteredAnime?.map((anime) => (
          <AnimeCard
            key={anime.id}
            onClick={() => navigate(`/anime/${anime.id}`, { state: { item: anime } })}
          >
            <AnimeImage
              src={anime.img || "/placeholder.jpg"}
              alt={anime.title}
            />
            <HoverOverlay>
              <HoverTitle>{anime.title}</HoverTitle>
              <HoverText>Click for more</HoverText>
            </HoverOverlay>
          </AnimeCard>
        ))}
      </AnimeGrid>
    </AnimePage>
  );
}
