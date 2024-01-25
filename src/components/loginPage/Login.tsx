import { FormEvent, useState } from "react";
import { Box } from "@mui/system";
import { Button, Paper, Typography } from "@mui/material";
import { LoginInputField } from "./LoginInputField";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN_LABELS } from "../../utils/constants";
import { addressLibrary } from "../../utils/addressLibrary";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../firebase";

export const Login = () => {
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const navigate = useNavigate();

  const { email, password } = LOGIN_LABELS;
  const { dashboard } = addressLibrary;

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await signInWithEmailAndPassword(auth, emailValue, passwordValue)
      .then(() => {
        navigate(dashboard);
      })
      .catch(() => console.log("Login failed"));
  };

  return (
    <form onSubmit={onSubmit}>
      <Box className="login">
        <Paper className="login-box">
          <Typography variant="h3" className="login-header">
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
              Log in
            </Button>
            <Link to="/register">
              <Button variant="contained">Sign up</Button>
            </Link>
          </Box>
        </Paper>
      </Box>
    </form>
  );
};
