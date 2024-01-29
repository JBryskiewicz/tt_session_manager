import { FormEvent, useState } from "react";
import { Box } from "@mui/system";
import { Paper, Typography } from "@mui/material";
import { LoginInputField } from "./LoginInputField";
import { useNavigate } from "react-router-dom";
import { LOGIN_BUTTONS, LOGIN_LABELS } from "../../utils/constants";
import { addressLibrary } from "../../utils/addressLibrary";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../firebase";
import { LoginButtons } from "../buttons/LoginButtons";

export const Login = () => {
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const navigate = useNavigate();

  const { email, password } = LOGIN_LABELS;
  const { login, register, toRegister } = LOGIN_BUTTONS;
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
            type={email}
            setValue={setEmailValue}
          />
          <LoginInputField
            label={password}
            value={passwordValue}
            type={password}
            setValue={setPasswordValue}
          />
          <LoginButtons
            submitButton={login}
            redirectButton={toRegister}
            address={register}
          />
        </Paper>
      </Box>
    </form>
  );
};
