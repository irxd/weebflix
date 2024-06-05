import Main from "@/components/layout/Main";
import { useAnimeDetail } from "@/hooks/useAnime";
import { ArrowBack } from "@mui/icons-material";
import { Container, Stack, Typography } from "@mui/material";
import { useRouter } from 'next/router';
import Overview from "./components/Overview";
import Recommendation from "./components/Recommendation";

export default function Details() {
  const router = useRouter();
  const id = router?.query?.id;

  const { data, error, isLoading } = useAnimeDetail(id as string);

  return (
    <Main>
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
        <Recommendation />
      </Container>
    </Main>
  );
}