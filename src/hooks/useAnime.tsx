import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then(res => res.json());
const baseUrl = "https://api.jikan.moe/v4/anime";

export function useAnimeList(page: number, query: string) {
  const { data, error, isLoading } = useSWR(`${baseUrl}?page=${page}&q=${query}`, fetcher);

  return {
    data,
    error,
    isLoading
  };
}

export function useAnimeDetail(id: string) {
  const { data, error, isLoading } = useSWR(`${baseUrl}/${id}`, fetcher);

  return {
    data,
    error,
    isLoading
  };
}

export function useAnimeRecommendation(id: string) {
  const { data, error, isLoading } = useSWR(`${baseUrl}/${id}/recommendations`, fetcher);

  return {
    data,
    error,
    isLoading
  };
}
