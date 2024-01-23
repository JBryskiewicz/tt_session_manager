import { useState } from "react";
import { Box } from "@mui/system";
import { Button, Paper, Typography } from "@mui/material";
import { LoginInputField } from "./LoginInputField";

const LoginLabels: { [key: string]: string } = {
  login: "login",
  email: "email",
  password: "password",
};

export const Login = () => {
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");

  const { email, password } = LoginLabels;

  return (
    <form>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10rem",
        }}
      >
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: "2rem",
            width: "40rem",
            padding: "2rem",
          }}
        >
          <Typography variant="h3" sx={{ textAlign: "center" }}>
            Login
          </Typography>
          <LoginInputField
            label={email}
            value={emailValue}
            setValue={setEmailValue}
          />
          <LoginInputField
            label={password}
            value={passwordValue}
            setValue={setPasswordValue}
          />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button variant="contained" type="submit">
              Log-in
            </Button>
            <Button variant="contained">Register</Button>
          </Box>
        </Paper>
      </Box>
    </form>
  );
};
