import axios from "axios";

const BASE_URL = "https://kitsu.io/api/edge";

export async function getAnimeByCategory(category, limit = 12) {
  const { data } = await axios.get(`${BASE_URL}/anime`, {
    params: {
      "filter[categories]": category,
      sort: "-userCount",
      "page[limit]": limit,
     "fields[anime]": "slug,titles,posterImage,coverImage,averageRating,userCount,episodeCount,synopsis",
    },
  });
  return data.data; 
}

export async function getMangaByCategory(category, limit = 12) {
  const { data } = await axios.get(`${BASE_URL}/manga`, {
    params: {
      "filter[categories]": category,
      sort: "-userCount",
      "page[limit]": limit,
"fields[manga]": "slug,titles,posterImage,averageRating,userCount,synopsis",
    },
  });
  return data.data;
}

export async function getCategories(limit = 30) {
  const { data } = await axios.get(`${BASE_URL}/categories`, {
    params: { "page[limit]": limit, sort: "title" },
  });
  return data.data.map((c) => c.attributes.title);
}
