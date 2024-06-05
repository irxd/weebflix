import Empty from "@/components/Empty";
import { DetailSkeleton, RecommendationSkeleton } from "@/components/Skeletons";
import Main from "@/components/layout/Main";
import Card from "@/components/shared/Card";
import { useFavoriteStore } from "@/stores/favorite";
import { Recommendation } from "@/types/definitions";
import { Add, ArrowBack, Star } from "@mui/icons-material";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from 'next/router';
import useSWR from "swr";

export default function Details() {
  const router = useRouter();
  const id = router.query.id;

  const fetcher = (url: string) => fetch(url).then(res => res.json());
  const { data, error, isLoading } = useSWR(`https://api.jikan.moe/v4/anime/${id}`, fetcher);
  const { data: recData, error: recError, isLoading: recIsLoading } = useSWR(`https://api.jikan.moe/v4/anime/${id}/recommendations`, fetcher);

  const addFavorite = useFavoriteStore((state) => state.addFavorite);
  const favorites = useFavoriteStore((state) => state.favorites);
  const removeFavorite = useFavoriteStore((state) => state.removeFavorite);

  const isError = data?.error || error;
  const detailData = data?.data;

  const isRecommendationError = recError?.error || error;
  const recommendationData = recData?.data;
  const isRecDataExist = recommendationData?.length > 0;

  const isFavorited = favorites.find((favorite) => favorite.mal_id === detailData?.mal_id);

  const favoriteHandler = () => {
    if (isFavorited) {
      removeFavorite(detailData?.mal_id);
    } else {
      addFavorite({
        mal_id: detailData?.mal_id,
        image: detailData?.images.webp.image_url,
        title: detailData?.title,
        score: detailData?.score
      });
    }
  }

  return (
    <Main>
      <Container>
        {isError && (
          <Empty
            message="Something wrong with the server :("
            subMessage="Please check back later"
          />
        )}

        <Stack
          direction="row"
          alignItems="center"
          mb={4}
          gap={1}
          onClick={() => router.back()}
        >
          <ArrowBack sx={{ color: "white" }} />
          <Typography color="white" variant="h6">Back</Typography>
        </Stack>

        {isLoading && (
          <DetailSkeleton />
        )}

        {!detailData && !isLoading && (
          <Empty
            message="No data found"
            subMessage="Please try again later"
          />
        )}

        {detailData && (
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
                  src={detailData?.images.webp.large_image_url}
                  alt={detailData?.title}
                  fill
                  style={{ borderRadius: "8px", objectFit: "cover" }}
                />
              </Box>
            </Stack>

            <Button
              variant={isFavorited ? "contained" : "outlined"}
              color="error"
              sx={{
                display: { xs: "flex", sm: "none" },
                textTransform: "none"
              }}
              startIcon={
                !isFavorited && <Add sx={{ color: "white" }} />
              }
              onClick={favoriteHandler}
            >
              <Typography color="white">
                {isFavorited ? "Remove from Favorites" : "Add to Favorites"}
              </Typography>
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
                      variant={isFavorited ? "contained" : "outlined"}
                      color="error"
                      sx={{
                        display: { xs: "none", sm: "flex" },
                        textTransform: "none",
                      }}
                      startIcon={
                        !isFavorited && <Add sx={{ color: "white" }} />
                      }
                      onClick={favoriteHandler}
                    >
                      <Typography color="white">
                        {isFavorited ? "Remove from Favorites" : "Add to Favorites"}
                      </Typography>
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
        )}

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

        {isRecDataExist && (
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
                  <Card
                    key={anime?.entry?.mal_id}
                    mal_id={anime?.entry?.mal_id}
                    image_url={anime?.entry?.images.webp.image_url}
                    title={anime?.entry?.title}
                  />
                ))
              }
            </Grid>
          </>
        )}
      </Container>
    </Main>
  );
}