import { Loader, Alert } from "@mantine/core";
import { Link } from "react-router-dom";
import { Section, TitleButton, Grid, ItemButton, ItemImage } from "./categorylist.styled";

const CategoryList = ({ title, hook, category, limit = 10,isManga = false }) => {
  const { data = [], isLoading, isError, error } = hook(category, limit);

  if (isLoading)
    return (
      <Section center>
        <Loader color="blue" />
      </Section>
    );

  if (isError)
    return (
      <Alert
        variant="light"
        color="red"
        title="Greška pri učitavanju"
        icon={<IconInfoCircle size={18} />}
        mt="md"
      >
        {error?.message || "Error"}
      </Alert>
    );

  if (data.length === 0)
    return (
      <Alert variant="light" color="gray" title="Nema rezultata" mt="sm">
        Empthy
      </Alert>
    );

 const base = isManga ? "manga" : "anime";

  return (
    <Section>
      {title && (
        <TitleButton as={Link} to={`/${base}?category=${encodeURIComponent(category)}`} state={{ category, type: base }} >
          {title}
        </TitleButton>
      )}

      <Grid>
        {data.map((it) => (
          <li key={it.id}>
            <ItemButton
              as={Link}
              to={`/${base}/${it.slug || it.id}`}
              state={{ item: it, type: base }}   
              aria-label={it.title}
              >
              <ItemImage src={it.img} alt={it.title} loading="lazy" />
            </ItemButton>
          </li>
        ))}
      </Grid>
    </Section>
  );
};


export default CategoryList;
