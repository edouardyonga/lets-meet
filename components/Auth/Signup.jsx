import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HeadLogo from "../HeadLogo";
import Styles from "../../styles/Home.module.css";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";

const theme = createTheme();

const SignUp = () => {
  const { user, signup } = useAuth();
  console.log(user);
  const router = useRouter();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const passData = {
      email: data.get("email"),
      password: data.get("password"),
    };

    console.log(passData);
    if (passData.password.length < 8) {
      enqueueSnackbar("At least 8 characters for password!", {
        variant: "error",
      });
      return;
    } else {
      const userReg = await signup(passData.email, passData.password)
        .then((res) => {
          console.log(res);
          enqueueSnackbar("Successfull Registration!", {
            variant: "success",
          });
          router.push("/home");
        })
        .catch((err) => {
          console.log(err);
        });
      console.log(userReg);

      return;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <HeadLogo />
          <Typography component="h1" variant="h5">
            Create an account asap
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              className={Styles.btnGrad}
            >
              Sign Up
            </Button>

            <Link
              href="/auth/login"
              variant="body2"
              style={{ textAlign: "center" }}
            >
              Already have an account? Login
            </Link>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
export default SignUp;
