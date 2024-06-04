import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { ArrowBack, Star, Add } from "@mui/icons-material";
import Image from "next/image";
import Main from "@/components/layout/Main";

export default function Details() {
  return (
    <Main>
      <Container>
        <Box mb={4}>
          <ArrowBack sx={{ color: "white" }} />
        </Box>

        <Stack direction={{ sm: "column", md: "row" }} gap={4} mb={8}>
          <Stack alignItems="center">
            <Image
              src="https://cdn.myanimelist.net/images/anime/1079/138100l.webp"
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
                <Typography variant="h4" color="white">Death Note</Typography>
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
              <Typography variant="h6" color="white">2006</Typography>
            </Box>

            <Stack direction="row" gap={2}>
              <Typography variant="h6" color="white">8.62</Typography>
              <Star sx={{ color: "red" }} />
            </Stack>

            <Typography color="white" align="justify" fontSize={{ xs: "small", sm: "medium" }}>
              {"Brutal murders, petty thefts, and senseless violence pollute the human world. In contrast, the realm of death gods is a humdrum, unchanging gambling den. The ingenious 17-year-old Japanese student Light Yagami and sadistic god of death Ryuk share one belief: their worlds are rotten.\n\nFor his own amusement, Ryuk drops his Death Note into the human world. Light stumbles upon it, deeming the first of its rules ridiculous: the human whose name is written in this note shall die. However, the temptation is too great, and Light experiments by writing a felon's name, which disturbingly enacts his first murder.\n\nAware of the terrifying godlike power that has fallen into his hands, Light—under the alias Kira—follows his wicked sense of justice with the ultimate goal of cleansing the world of all evil-doers. The meticulous mastermind detective L is already on his trail, but as Light's brilliance rivals L's, the grand chase for Kira turns into an intense battle of wits that can only end when one of them is dead.\n\n[Written by MAL Rewrite]"}
            </Typography>
          </Stack>
        </Stack>

        <Box mb={8}>
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/Vt_3c8BgxV4"
            style={{ borderRadius: "8px" }}
          />
        </Box>

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