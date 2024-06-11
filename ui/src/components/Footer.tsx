import { Box } from "@mui/material";
import { Text } from "./Text";

const Footer = () => {
  return (
    <Box
      height={{ xs: "4vh", sm: "6vh" }}
      textAlign="center"
      alignItems="center"
      width="100%"
      display="flex"
      justifyContent="center"
      marginTop="auto"
      boxShadow="0px 2px 4px -1px rgba(255, 255, 255, 0.2), 0px 4px 5px 0px rgba(255, 255, 255, 0.14), 0px 1px 10px 0px rgba(255, 255, 255, 0.12)"
      sx={{ backdropFilter: "blur(2px)" }}
    >
      <Text textType="text">&copy; 2024 Palomitalandia.</Text>
    </Box>
  );
};

export default Footer;
