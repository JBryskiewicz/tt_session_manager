import { FormEvent, useState } from "react";
import { Box } from "@mui/system";
import { Paper, Typography } from "@mui/material";
import { LoginInputField } from "./LoginInputField";
import { useNavigate } from "react-router-dom";
import { LOGIN_BUTTONS, LOGIN_LABELS } from "../../utils/constants";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { createUser } from "../../utils/API_communication";
import { NewUser } from "../../types/types";
import { addressLibrary } from "../../utils/addressLibrary";
import { LoginButtons } from "../buttons/LoginButtons";

export const Register = () => {
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [repeatPassValue, setRepeatPassValue] = useState<string>("");
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const { email, password, confirmPass } = LOGIN_LABELS;
  const { register, toLogin } = LOGIN_BUTTONS;
  const { login } = addressLibrary;

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    if (passwordValue === repeatPassValue) {
      event.preventDefault();
      await createUserWithEmailAndPassword(emailValue, passwordValue)
        .then(async () => {
          const newUser: NewUser = { email: emailValue, sessions: [] };
          await createUser(newUser);
          navigate(login);
        })
        .catch((error) => console.log(error));
    } else {
      console.log("Passwords don't match");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <Box className="login">
        <Paper className="login-box">
          <Typography variant="h3" className="login-header">
            Register
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
          <LoginInputField
            label={confirmPass}
            value={repeatPassValue}
            type={password}
            setValue={setRepeatPassValue}
          />
          <LoginButtons
            submitButton={register}
            redirectButton={toLogin}
            address={""}
          />
        </Paper>
      </Box>
    </form>
  );
};
