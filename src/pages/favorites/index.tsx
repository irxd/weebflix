import Empty from "@/components/Empty";
import Main from "@/components/layout/Main";
import Card from "@/components/shared/Card";
import { useFavoriteStore } from "@/stores/favorite";
import { Button, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";

export default function Favorites() {
  const favorites = useFavoriteStore((state) => state.favorites);
  const hadFavorites = favorites.length > 0;

  return (
    <Main>
      <Container>
        {hadFavorites && (
          <>
            <Typography
              variant="h6"
              color="white"
              mb={2}
            >
              My Favorites
            </Typography>
            <Grid container rowSpacing={4} columnSpacing={2} marginBottom={16}>
              {
                favorites.map((favorite) => (
                  <Card
                    key={favorite.mal_id}
                    mal_id={favorite.mal_id}
                    image_url={favorite.image}
                    title={favorite.title}
                    score={favorite.score}
                  />
                ))
              }
            </Grid>
          </>
        )}

        {!hadFavorites && (
          <Empty
            message="No favorites yet!"
            subMessage="You haven’t added any anime to your favorite :("
            action={
              <Link href="/">
                <Button
                  variant="outlined"
                  color="error"
                  sx={{
                    textTransform: "none"
                  }}
                >
                  <Typography color="white">Start Exploring</Typography>
                </Button>
              </Link>
            }
          />
        )}
      </Container>
    </Main>
  );
}
