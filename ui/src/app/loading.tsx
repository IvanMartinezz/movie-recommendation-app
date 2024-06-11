import { Box, CircularProgress } from "@mui/material";

export default function Loading() {
  return (
    <Box
      zIndex="999999"
      height="100vh"
      width="100vw"
      justifyContent="center"
      alignItems="center"
      display="flex"
    >
      <CircularProgress />
    </Box>
  );
}
