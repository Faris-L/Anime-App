import { useQuery } from "@tanstack/react-query";
import { getAnimeByCategory } from "../Services/appClient";

export default function useAnimeByCategory(category, limit = 12) {
  return useQuery({
    queryKey: ["animeByCategory", category, limit],
    queryFn: () => getAnimeByCategory(category, limit),
    enabled: !!category,
    refetchOnWindowFocus: false,
    retry: 1,
    select: (items) =>
      (items ?? []).map((it) => {
        const a = it.attributes || {};
        return {
          id: it.id,
          title: a.titles?.en || a.titles?.en_jp || a.canonicalTitle,
          img:
            a.coverImage?.original ||
            a.coverImage?.large ||
            a.posterImage?.original ||
            a.posterImage?.large ||
            a.posterImage?.medium ||
            a.posterImage?.small ||
            null,
          rating: a.averageRating ?? null,
          episodeCount: a.episodeCount ?? null,
          slug: a.slug,
        };
      }),
  });
}
