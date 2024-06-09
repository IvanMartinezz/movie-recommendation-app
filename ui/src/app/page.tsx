"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Body from "@/components/Body";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default function Home() {
  const [name, setName] = useState<string>("");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main className={styles.main}>
        <Header />
        <Body />
        <Footer />
      </main>
    </ThemeProvider>
  );
}
