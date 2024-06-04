import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { ArrowBack, Star, Add } from "@mui/icons-material";
import Image from "next/image";
import Main from "@/components/layout/Main";
import { useRouter } from 'next/router'
import useSWR from "swr";
import Empty from "@/components/Empty";
import { DetailSkeleton } from "@/components/Skeletons";

export default function Details() {
  const router = useRouter();

  const fetcher = (url: string) => fetch(url).then(res => res.json());
  const { data, error, isLoading } = useSWR(`https://api.jikan.moe/v4/anime/${router.query.id}`, fetcher);

  const isError = data?.error || error;
  const detailData = data?.data;

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
            <Image
              src={detailData?.images.webp.image_url}
              alt=""
              width={300}
              height={450}
              style={{ borderRadius: "8px" }}
            />
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
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="h4" color="white">{detailData?.title}</Typography>
                <Button
                  variant="outlined"
                  color="error"
                  sx={{
                    display: { xs: "none", sm: "flex" },
                    textTransform: "none"
                  }}
                  startIcon={<Add sx={{ color: "white" }} />}>
                  <Typography color="white">Add to Favorites</Typography>
                </Button>
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

        <Typography
          variant="h6"
          color="white"
          mb={2}
        >
          You Might Also Like
        </Typography>
        <Grid container rowSpacing={4} columnSpacing={2} marginBottom={16}>
          {
            Array.from({ length: 10 }).map((_, index) => (
              <Grid key={index} item xs={6} sm={4} md={2.4}>
                <Box
                  sx={{
                    height: { xs: "200px", sm: "300px" },
                    backgroundColor: "#EEEBE3",
                    borderRadius: "8px"
                  }}
                >
                </Box>
              </Grid>
            ))
          }
        </Grid>
      </Container>
    </Main>
  );
}