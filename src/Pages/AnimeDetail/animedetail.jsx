import { useLocation, useParams } from "react-router-dom";
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

export default function AnimeDetail() {
  const { state } = useLocation();
  const { key } = useParams();
  const pathname = useLocation().pathname;

  const item = state?.item;

  return (
    <DetailSection>
      <DetailContainer>
        <ImageBox>
          <AnimeImage src={item?.img || "https://via.placeholder.com/280x400?text=No+Image"} alt={item?.title || key} />
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
        <AddButton>Add to favourites</AddButton>
        </InfoBox>
      </DetailContainer>
    </DetailSection>
  );
}