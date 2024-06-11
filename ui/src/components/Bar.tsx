import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

interface Props {
  children: React.ReactNode;
}

export default function Bar({ children }: Props) {
  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{
        height: { xs: "8vh", sm: "10vh" },
        minWidth: "240px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        backdropFilter: "blur(2px)",
        boxShadow:
          "0px 2px 4px -1px rgba(255, 255, 255, 0.2), 0px 4px 5px 0px rgba(255, 255, 255, 0.14), 0px 1px 10px 0px rgba(255, 255, 255, 0.12)",
      }}
    >
      <Toolbar style={{ justifyContent: "space-between" }}>{children}</Toolbar>
    </AppBar>
  );
}
