import Card from "@/components/Card";
import Empty from "@/components/Empty";
import { RecommendationSkeleton } from "@/components/Skeletons";
import { RecommendationList, RecommendationProps } from "@/types/definitions";
import { Grid, Typography } from "@mui/material";

export default function Recommendation({
  data, error, isLoading
}: RecommendationProps) {

  const recommendationData = data?.data;
  const isError = data?.error || error;
  const isDataExist = recommendationData?.length > 0;

  return (
    <>
      {isError && (
        <Empty
          message="Recommendation failed to load :("
          subMessage="Please check back later"
        />
      )}

      {isLoading && (
        <RecommendationSkeleton />
      )}

      {isDataExist && (
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
