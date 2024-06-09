import { Suspense } from "react";
import Movies from "@/pages/movies/page";
import { Text } from "./Text";
import { Box } from "@mui/material";

const Body = () => {
  return (
    <Box display="flex" gap="1.5rem" flexDirection="column">
      <Box
        textAlign="center"
        alignItems="center"
        width="100%"
        display="flex"
        justifyContent="center"
      >
        <Text type="bold" textType="h2">
          Recommended Movies
        </Text>
      </Box>
      <Suspense fallback={"Loading"}>
        <Movies />
      </Suspense>
    </Box>
  );
};

export default Body;
