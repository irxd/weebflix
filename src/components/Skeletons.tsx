import { Grid, Skeleton, Stack } from "@mui/material";

export function HomepageSkeleton() {
  return (
    <>
      <Grid container rowSpacing={4} columnSpacing={2} marginBottom={16}>
        {
          Array.from({ length: 25 }).map((_, index) => (
            <Grid key={index} item xs={6} sm={4} md={2.4}>
              <Skeleton
                animation="wave"
                variant="rectangular"
                sx={{
                  backgroundColor: 'grey.600',
                  borderRadius: "8px",
                  mb: 1,
                  height: { xs: "220px", sm: "300px" }
                }}
              />
              <Stack direction="row" justifyContent="space-between">
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  width="120px"
                  height="13px"
                  sx={{ bgcolor: 'grey.600', borderRadius: "4px" }}
                />
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  width="24px"
                  height="13px"
                  sx={{ bgcolor: 'grey.600', borderRadius: "4px" }}
                />
              </Stack>
            </Grid>
          ))
        }
      </Grid>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        alignItems="center"
        justifyContent="center"
        gap={4}
        marginBottom={16}
      >
        <Skeleton
          animation="wave"
          variant="rectangular"
          sx={{
            bgcolor: 'grey.600',
            borderRadius: "4px",
            width: { xs: "266px", sm: "416px" },
            height: { xs: "26px", sm: "40px" }
          }}
        />
        <Skeleton
          animation="wave"
          variant="rectangular"
          sx={{
            bgcolor: 'grey.600',
            borderRadius: "4px",
            width: { xs: "95px", sm: "104px" },
            height: { xs: "30px", sm: "40px" }
          }}
        />
      </Stack>
    </>
  );
}