import { useLocation, useParams, useNavigate } from "react-router-dom";
import {
  DetailSection,
  DetailContainer,
  ImageBox,
  AnimeImage,
  InfoBox,
  Title,
  Description,
  AddButton,
} from "./animedetail.styled";
import { useFavorites } from "../../context/FavoritesContext.jsx";

export default function AnimeDetail() {
  const { state } = useLocation();
  const { key } = useParams();
  const pathname = useLocation().pathname;
  const navigate = useNavigate();

  const item = state?.item;

  const { removeFromFavorites, addToFavorites, isInFavorites } = useFavorites();
  const type = pathname.includes("manga") ? "manga" : "anime";
  const alreadyAdded = item ? isInFavorites(item.id, type) : false;

  const handleClick = () => {
    if (!item) return;

    if (alreadyAdded) {
      removeFromFavorites(item.id, type);
      navigate(`/${type}`);
    } else {
      addToFavorites(item, type);
      navigate("/favorites");
    }
  };

  return (
    <DetailSection>
      <DetailContainer>
        <ImageBox>
          <AnimeImage
            src={item?.img || "https://via.placeholder.com/280x400?text=No+Image"}
            alt={item?.title || key}
          />
        </ImageBox>
        <InfoBox>
          <Title>{item?.title || key}</Title>
          <Description>
            {item?.description ||
              item?.synopsis ||
              item?.overview ||
              item?.desc ||
              item?.summary ||
              "Opis nije dostupan."}
          </Description>
          <AddButton onClick={handleClick}>
            {alreadyAdded ? "Remove from Favorites" : "Add to Favorites"}
          </AddButton>
        </InfoBox>
      </DetailContainer>
    </DetailSection>
  );
}
