import { useState } from "react";
import { Box } from "@mui/system";
import { Button, Paper, Typography } from "@mui/material";
import { LoginInputField } from "./LoginInputField";
import { Link } from "react-router-dom";

const LoginLabels: { [key: string]: string } = {
  login: "login",
  email: "email",
  password: "password",
  confirmPass: "confirm password",
};

export const Register = () => {
  const [loginValue, setLoginValue] = useState<string>("");
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [repeatPassValue, setRepeatPassValue] = useState<string>("");

  const { login, email, password, confirmPass } = LoginLabels;

  return (
    <form>
      <Box className="login">
        <Paper className="login-box">
          <Typography variant="h3" className="login-header">
            Register
          </Typography>
          <LoginInputField
            label={login}
            value={loginValue}
            setValue={setLoginValue}
          />
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
          <LoginInputField
            label={confirmPass}
            value={repeatPassValue}
            setValue={setRepeatPassValue}
          />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button variant="contained" type="submit">
              Confirm
            </Button>
            <Link to="/">
              <Button variant="contained">Back to Login</Button>
            </Link>
          </Box>
        </Paper>
      </Box>
    </form>
  );
};
