import { useFavorites } from "../../context/FavoritesContext.jsx";
import { useNavigate } from "react-router-dom";
import {
  FavoritesContainer,
  SectionTitle,
  Grid,
  Card,
  CardImage,
  CardTitle,
} from "./favorites.styled.js";

export default function FavoritesPage() {
  const { favorites } = useFavorites();
  const navigate = useNavigate();

  const goToDetail = (item, type) => {
    navigate(`/${type}/${item.id}`, { state: { item } });
  };

  return (
    <FavoritesContainer>
      {favorites.anime.length > 0 && (
        <>
          <SectionTitle>Anime Favorites</SectionTitle>
          <Grid>
            {favorites.anime.map(anime => (
              <Card key={anime.id} onClick={() => goToDetail(anime, "anime")}>
                <CardImage src={anime.img} alt={anime.title} />
                <CardTitle>{anime.title}</CardTitle>
              </Card>
            ))}
          </Grid>
        </>
      )}

      {favorites.manga.length > 0 && (
        <>
          <SectionTitle>Manga Favorites</SectionTitle>
          <Grid>
            {favorites.manga.map(manga => (
              <Card key={manga.id} onClick={() => goToDetail(manga, "manga")}>
                <CardImage src={manga.img} alt={manga.title} />
                <CardTitle>{manga.title}</CardTitle>
              </Card>
            ))}
          </Grid>
        </>
      )}

      {favorites.anime.length === 0 && favorites.manga.length === 0 && (
        <p>No favorites added yet.</p>
      )}
    </FavoritesContainer>
  );
}
