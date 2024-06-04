import { Box, Grid, Skeleton, Stack } from "@mui/material";

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
                  sx={{ backgroundColor: 'grey.600', borderRadius: "4px" }}
                />
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  width="24px"
                  height="13px"
                  sx={{ backgroundColor: 'grey.600', borderRadius: "4px" }}
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
            backgroundColor: 'grey.600',
            borderRadius: "4px",
            width: { xs: "266px", sm: "416px" },
            height: { xs: "26px", sm: "40px" }
          }}
        />
        <Skeleton
          animation="wave"
          variant="rectangular"
          sx={{
            backgroundColor: 'grey.600',
            borderRadius: "4px",
            width: { xs: "95px", sm: "104px" },
            height: { xs: "30px", sm: "40px" }
          }}
        />
      </Stack>
    </>
  );
}

export function DetailSkeleton() {
  return (
    <>
      <Stack direction={{ sm: "column", md: "row" }} gap={4} mb={8}>
        <Stack alignItems="center">
          <Skeleton
            animation="wave"
            variant="rectangular"
            sx={{
              backgroundColor: 'grey.600',
              borderRadius: "8px",
              width: "300px",
              height: "450px"
            }}
          />
        </Stack>

        <Skeleton
          animation="wave"
          variant="rectangular"
          sx={{
            display: { xs: "flex", sm: "none" },
            backgroundColor: 'grey.600',
            borderRadius: "4px",
            height: "40px",
          }}
        />

        <Stack direction="column" flex={1} gap={2}>
          <Box>
            <Stack direction="row" justifyContent="space-between">
              <Skeleton
                animation="wave"
                variant="rectangular"
                sx={{
                  backgroundColor: 'grey.600',
                  borderRadius: "4px",
                  width: "240px",
                  height: "42px"
                }}
              />
              <Skeleton
                animation="wave"
                variant="rectangular"
                sx={{
                  backgroundColor: 'grey.600',
                  borderRadius: "4px",
                  width: "180px",
                  height: "42px",
                  display: { xs: "none", sm: "flex" }
                }}
              />
            </Stack>
            <Skeleton
              animation="wave"
              variant="rectangular"
              sx={{
                backgroundColor: 'grey.600',
                borderRadius: "4px",
                width: "60px",
                height: "26px",
                mt: 1
              }}
            />
          </Box>

          <Stack direction="row" gap={2} py={2}>
            <Skeleton
              animation="wave"
              variant="rectangular"
              sx={{
                backgroundColor: 'grey.600',
                borderRadius: "4px",
                width: "84px",
                height: "26px"
              }}
            />
          </Stack>

          <Skeleton
            animation="wave"
            variant="rectangular"
            sx={{
              backgroundColor: 'grey.600',
              borderRadius: "4px",
              width: "100%",
              height: "240px"
            }}
          />
        </Stack>
      </Stack>

      <Skeleton
        animation="wave"
        variant="rectangular"
        sx={{
          backgroundColor: 'grey.600',
          borderRadius: "4px",
          width: "100%",
          height: "400px",
          mb: 8
        }}
      />

      <Skeleton
        animation="wave"
        variant="rectangular"
        sx={{
          backgroundColor: 'grey.600',
          borderRadius: "8px",
          height: "32px",
          width: "180px",
          mb: 2
        }}
      />

      <Grid container rowSpacing={4} columnSpacing={2} marginBottom={16}>
        {
          Array.from({ length: 10 }).map((_, index) => (
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
                  sx={{ backgroundColor: 'grey.600', borderRadius: "4px" }}
                />
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  width="24px"
                  height="13px"
                  sx={{ backgroundColor: 'grey.600', borderRadius: "4px" }}
                />
              </Stack>
            </Grid>
          ))
        }
      </Grid>
    </>
  );
}