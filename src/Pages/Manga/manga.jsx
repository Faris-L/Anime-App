import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useMangaByCategory from "../../queries/useMangaByCategory";
import { getCategories } from "../../Services/appClient";
import {
  Page,
  Controls,
  CategorySelect,
  SearchInput,
  Grid,
  Card,
  CardImage,
  HoverOverlay,
  HoverTitle,
  HoverText,
} from "./manga.styled";

export default function Manga() {
  const [category, setCategory] = useState("action");
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();
  const { data: mangaList, isLoading, isError } = useMangaByCategory(category, 12);

  useEffect(() => {
    async function fetchCategories() {
      const cats = await getCategories();
      setCategories(cats);
    }
    fetchCategories();
  }, []);

  const filteredManga = mangaList?.filter((m) =>
    m.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) return <p style={{ textAlign: "center" }}>Loading manga...</p>;
  if (isError) return <p style={{ textAlign: "center" }}>Something went wrong!</p>;

  return (
    <Page>
      {/* Controls */}
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

      {/* Manga Grid */}
      <Grid>
        {filteredManga?.map((manga) => (
          <Card
            key={manga.id}
            onClick={() => navigate(`/manga/${manga.id}`, { state: { item: manga } })}
          >
            <CardImage src={manga.img || "/placeholder.jpg"} alt={manga.title} />
            <HoverOverlay>
              <HoverTitle>{manga.title}</HoverTitle>
              <HoverText>Click for more</HoverText>
            </HoverOverlay>
          </Card>
        ))}
      </Grid>
    </Page>
  );
}
