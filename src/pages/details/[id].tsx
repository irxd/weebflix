import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { ArrowBack, Star, Add } from "@mui/icons-material";
import Image from "next/image";
import Main from "@/components/layout/Main";
import { useRouter } from 'next/router'
import useSWR from "swr";
import Empty from "@/components/Empty";
import { DetailSkeleton, RecommendationSkeleton } from "@/components/Skeletons";
import { Recommendation } from "@/types/definitions";
import Link from "next/link";

export default function Details() {
  const router = useRouter();
  const id = router.query.id;

  const fetcher = (url: string) => fetch(url).then(res => res.json());
  const { data, error, isLoading } = useSWR(`https://api.jikan.moe/v4/anime/${id}`, fetcher);
  const { data: recData, error: recError, isLoading: recIsLoading } = useSWR(`https://api.jikan.moe/v4/anime/${id}/recommendations`, fetcher);

  const isError = data?.error || error;
  const detailData = data?.data;

  const isRecommendationError = recError?.error || error;
  const recommendationData = recData?.data;

  return (
    <Main>
      <Container>
        {isError && (
          <Empty
            message="Something wrong with the server :("
            subMessage="Please check back later"
          />
        )}

        <Box mb={4}>
          <ArrowBack sx={{ color: "white" }} />
        </Box>

        {isLoading && (
          <DetailSkeleton />
        )}

        <Stack direction={{ sm: "column", md: "row" }} gap={4} mb={8}>
          <Stack alignItems="center">
            <Box
              sx={{
                height: "450px",
                width: { xs: "100%", sm: "300px" },
                borderRadius: "8px",
                position: "relative",
                mb: 1,
              }}
            >
              <Image
                src={detailData?.images.webp.image_url}
                alt={detailData?.title}
                fill
                style={{ borderRadius: "8px", objectFit: "cover" }}
              />
            </Box>
          </Stack>

          <Button
            variant="outlined"
            color="error"
            sx={{
              display: { xs: "flex", sm: "none" },
              textTransform: "none"
            }}
            startIcon={<Add sx={{ color: "white" }} />}>
            <Typography color="white">Add to Favorites</Typography>
          </Button>
          <Stack direction="column" flex={1} gap={2}>
            <Box>
              <Stack direction="row" justifyContent="space-between" gap={1}>
                <Typography variant="h4" color="white">{detailData?.title}</Typography>
                <Box
                  sx={{
                    flexShrink: 0
                  }}
                >
                  <Button
                    variant="outlined"
                    color="error"
                    sx={{
                      display: { xs: "none", sm: "flex" },
                      textTransform: "none",
                    }}
                    startIcon={<Add sx={{ color: "white" }} />}>
                    <Typography color="white">Add to Favorites</Typography>
                  </Button>
                </Box>

              </Stack>
              <Typography variant="h6" color="white">{detailData?.year}</Typography>
            </Box>

            <Stack direction="row" gap={2}>
              <Typography variant="h6" color="white">{detailData?.score}</Typography>
              <Star sx={{ color: "red" }} />
            </Stack>

            <Typography color="white" align="justify" fontSize={{ xs: "small", sm: "medium" }}>
              {detailData?.synopsis}
            </Typography>
          </Stack>
        </Stack>

        {detailData?.trailer?.embed_url && (
          <Box mb={8}>
            <iframe
              width="100%"
              height="400"
              src={detailData?.trailer?.embed_url}
              style={{ borderRadius: "8px" }}
            />
          </Box>

        )}

        {isRecommendationError && (
          <Empty
            message="Recommendation failed to load :("
            subMessage="Please check back later"
          />
        )}

        {recIsLoading && (
          <RecommendationSkeleton />
        )}

        {detailData && (
          <>
            <Typography
              variant="h6"
              color="white"
              mb={2}
            >
              You Might Also Like
            </Typography>
            <Grid container rowSpacing={4} columnSpacing={2} marginBottom={16}>
              {
                recommendationData?.map((anime: Recommendation) => (
                  <Grid key={anime?.entry?.mal_id} item xs={6} sm={4} md={2.4}>
                    <Link href={`/details/${anime?.entry?.mal_id}`}>
                      <Box
                        sx={{
                          height: { xs: "220px", sm: "300px" },
                          borderRadius: "8px",
                          position: "relative",
                          mb: 1,
                        }}
                      >
                        <Image
                          src={anime?.entry?.images.webp.image_url}
                          alt={anime?.entry?.title}
                          fill
                          sizes="100% 100%"
                          style={{ borderRadius: "8px", objectFit: "cover" }}

                        />
                      </Box>
                      <Typography color="white" fontSize="small">{anime?.entry?.title}</Typography>
                    </Link>
                  </Grid>
                ))
              }
            </Grid>
          </>
        )}
      </Container>
    </Main>
  );
}