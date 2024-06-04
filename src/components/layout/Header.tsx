import { FavoriteBorderOutlined } from "@mui/icons-material";
import { AppBar, Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Search from "./Search";
import Link from "next/link";

export default function Header() {
  return (
    <AppBar position="fixed" sx={{ height: "80px", backgroundColor: "black" }}>
      <Container
        sx={{
          display: "flex",
          flex: 1,
          alignItems: "center",
          justifyContent: "space-between"
        }}>
        <Link href="/">
          <Box display={{ xs: "none", sm: "block" }}>
            <Image src="/logo.png" alt="logo" width={120} height={36} />
          </Box>
          <Box display={{ xs: "block", sm: "none" }} mr={2}>
            <Image src="/logo-mobile.png" alt="logo" width={26} height={36} />
          </Box>
        </Link>

        <Box display={{ xs: "block", sm: "none" }}>
          <Search />
        </Box>

        <Stack direction="row" gap={2} alignItems="center">
          <Box display={{ xs: "none", sm: "block" }}>
            <Search />
          </Box>
          <Link href="/favorites">
            <Typography display={{ xs: "none", sm: "block" }}>My Favorites</Typography>
            <FavoriteBorderOutlined sx={{ display: { xs: "block", sm: "none" } }} />
          </Link>
        </Stack>
      </Container>
    </AppBar>
  );
}