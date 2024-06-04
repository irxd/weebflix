import Empty from "@/components/Empty";
import Pagination from "@/components/Pagination";
import { HomepageSkeleton } from "@/components/Skeletons";
import Main from "@/components/layout/Main";
import { AnimeList } from "@/types/definitions";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
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

        {isDataExist && (
          <>
            <Grid container rowSpacing={4} columnSpacing={2} marginBottom={16}>
              {listData.map((anime: AnimeList) => (
                <Grid key={anime.mal_id} item xs={6} sm={4} md={2.4}>
                  <Link href={`/details/${anime.mal_id}`}>
                    <Box
                      sx={{
                        height: { xs: "220px", sm: "300px" },
                        borderRadius: "8px",
                        position: "relative",
                        mb: 1,
                      }}
                    >
                      <Image
                        src={anime.images.webp.image_url}
                        alt={anime.title}
                        fill
                        sizes="100% 100%"
                        style={{ borderRadius: "8px", objectFit: "cover" }}

                      />
                    </Box>
                    <Stack direction="row" justifyContent="space-between">
                      <Typography color="white" fontSize="small">{anime.title}</Typography>
                      <Typography color="white" fontSize="small">{anime.score}</Typography>
                    </Stack>
                  </Link>
                </Grid>
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
