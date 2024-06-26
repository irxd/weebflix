import Main from "@/components/layout/Main";
import { useAnimeDetail, useAnimeRecommendation } from "@/hooks/useAnime";
import { ArrowBack } from "@mui/icons-material";
import { Container, Stack, Typography } from "@mui/material";
import Head from "next/head";
import { useRouter } from 'next/router';
import Overview from "./components/Overview";
import Recommendation from "./components/Recommendation";

export default function Details() {
  const router = useRouter();
  const id = router?.query?.id;

  const { data, error, isLoading } = useAnimeDetail(id as string);
  const { data: recData, error: recError, isLoading: recIsLoading } = useAnimeRecommendation(id as string);

  return (
    <Main>
      <Head>
        <title>Weeblix - {data?.data?.title}</title>
      </Head>

      <Container>
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

        <Overview
          data={data}
          error={error}
          isLoading={isLoading}
        />
        <Recommendation
          data={recData}
          error={recError}
          isLoading={recIsLoading}
        />
      </Container>
    </Main>
  );
}