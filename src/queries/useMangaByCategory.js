import { useQuery } from "@tanstack/react-query";
import { getMangaByCategory } from "../Services/appClient";

export default function useMangaByCategory(category, limit = 12) {
  return useQuery({
    queryKey: ["mangaByCategory", category, limit],
    queryFn: () => getMangaByCategory(category, limit),
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
            a.posterImage?.original ||
            a.posterImage?.large ||
            a.posterImage?.medium ||
            a.posterImage?.small ||
            null,
          rating: a.averageRating ?? null,
          slug: a.slug,
        };
      }),
  });
}