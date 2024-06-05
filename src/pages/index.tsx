import Card from "@/components/Card";
import Empty from "@/components/Empty";
import Pagination from "@/components/Pagination";
import { HomepageSkeleton } from "@/components/Skeletons";
import Main from "@/components/layout/Main";
import { AnimeList } from "@/types/definitions";
import { Container, Grid } from "@mui/material";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";

export default function Home() {
  const queryParams = useSearchParams();
  const page = queryParams.get('page') || 1;
  const query = queryParams.get('query') || "";

  const fetcher = (url: string) => fetch(url).then(res => res.json());
  const { data, error, isLoading } = useSWR(`https://api.jikan.moe/v4/anime?page=${page}&q=${query}`, fetcher);

  const isError = data?.error || error;
  const listData = data?.data;
  const pagination = data?.pagination;
  const isDataExist = listData && listData.length > 0;

  return (
    <Main>
      <Container>
        {isError && (
          <Empty
            message="Something wrong with the server :("
            subMessage="Please check back later"
          />
        )}

        {isLoading && (
          <HomepageSkeleton />
        )}

        {(!isDataExist && !isError) && (
          <Empty
            message="No data found"
            subMessage="Please try again with different keyword"
          />
        )}

        {isDataExist && (
          <>
            <Grid container rowSpacing={4} columnSpacing={2} marginBottom={16}>
              {listData.map((anime: AnimeList) => (
                <Card
                  key={anime.mal_id}
                  mal_id={anime.mal_id}
                  image_url={anime.images.webp.image_url}
                  title={anime.title}
                  score={anime.score}
                />
              ))}
            </Grid>
            <Pagination
              totalPage={Math.ceil(pagination.items.total / pagination.items.per_page)}
              currentPage={pagination.current_page}
            />
          </>
        )}
      </Container>
    </Main>
  );
}
