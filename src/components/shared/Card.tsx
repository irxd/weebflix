import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { CardsProps } from "@/types/definitions";

export default function Card({
  mal_id,
  image_url,
  title,
  score,
}: CardsProps) {
  return (
    <Grid key={mal_id} item xs={6} sm={4} md={2.4}>
      <Link href={`/details/${mal_id}`}>
        <Box
          sx={{
            height: { xs: "220px", sm: "300px" },
            borderRadius: "8px",
            position: "relative",
            mb: 1,
          }}
        >
          <Image
            src={image_url}
            alt={title}
            fill
            sizes="100% 100%"
            style={{ borderRadius: "8px", objectFit: "cover" }}

          />
        </Box>
        <Stack direction="row" justifyContent="space-between">
          <Typography color="white" fontSize="small">{title}</Typography>
          <Typography color="white" fontSize="small">{score}</Typography>
        </Stack>
      </Link>
    </Grid>
  );
}
