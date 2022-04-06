import React from "react";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { AuthContextProvider } from "../context/AuthContext";
import { SnackbarProvider } from "notistack";
import createEmotionCache from "../utility/createEmotionCache";
import lightTheme from "../styles/theme/lightTheme";
import "../styles/globals.css";
import Slide from "@mui/material/Slide";
// import Navbar from "../components/Navbar/Navbar";
import { useRouter } from "next/router";
import RouterGuard from "../components/RouterGuard";

const clientSideEmotionCache = createEmotionCache();
const publicRoutes = ["/", "auth/login", "auth/signup"];

const MyApp = (props) => {
  const router = useRouter();
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <AuthContextProvider>
      <SnackbarProvider
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        TransitionComponent={Slide}
      >
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            {/* <Navbar /> */}
            <h2>{router.pathname}</h2>

            {publicRoutes.includes(router.pathname) ? (
              <Component {...pageProps} />
            ) : (
              <RouterGuard>
                <Component {...pageProps} />
              </RouterGuard>
            )}
          </ThemeProvider>
        </CacheProvider>
      </SnackbarProvider>
    </AuthContextProvider>
  );
};

export default MyApp;
