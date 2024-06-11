"use client";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import styles from "./page.module.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import store from "@/store/store";

import Wrapper from "@/components/Wrapper";
import Loading from "./loading";

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main className={styles.main}>
          {loading ? <Loading /> : <Wrapper />}
        </main>
      </ThemeProvider>
    </Provider>
  );
}
