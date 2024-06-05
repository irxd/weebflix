import Card from "@/components/Card";
import Empty from "@/components/Empty";
import { RecommendationSkeleton } from "@/components/Skeletons";
import { RecommendationList } from "@/types/definitions";
import { Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function Recommendation() {
  const router = useRouter();
  const id = router.query.id;

  const fetcher = (url: string) => fetch(url).then(res => res.json());
  const { data: recData, error: recError, isLoading: recIsLoading } = useSWR(`https://api.jikan.moe/v4/anime/${id}/recommendations`, fetcher);

  const recommendationData = recData?.data;
  const isRecommendationError = recData?.error || recError;
  const isRecDataExist = recommendationData?.length > 0;

  return (
    <>
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
              recommendationData?.map((anime: RecommendationList) => (
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
    </>
  );
}
