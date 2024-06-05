import Main from "@/components/layout/Main";
import { ArrowBack } from "@mui/icons-material";
import { Container, Stack, Typography } from "@mui/material";
import { useRouter } from 'next/router';
import Overview from "./components/Overview";
import Recommendation from "./components/Recommendation";

export default function Details() {
  const router = useRouter();

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

        <Overview />
        <Recommendation />
      </Container>
    </Main>
  );
}