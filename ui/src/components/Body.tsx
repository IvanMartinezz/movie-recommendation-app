import { Suspense } from "react";
import { Box } from "@mui/material";
import Movies from "@/pages/movies/page";
import { Text } from "./Text";

const Body = () => {
  return (
    <Box
      display="flex"
      gap=".5rem"
      flexDirection="column"
      height="80vh"
      minHeight="80vh"
      justifyContent="flex-start"
      alignItems="center"
      padding="0.5rem"
    >
      <Text textType="h2">Welcome to Palomitalandia</Text>
      <Text textType="subtitle">Recommended Movies</Text>
      <Suspense fallback={"Loading"}>{<Movies />}</Suspense>
    </Box>
  );
};

export default Body;
