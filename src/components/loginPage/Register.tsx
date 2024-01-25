import { FormEvent, useState } from "react";
import { Box } from "@mui/system";
import { Button, Paper, Typography } from "@mui/material";
import { LoginInputField } from "./LoginInputField";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN_LABELS } from "../../utils/constants";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { createUser } from "../../utils/API_communication";
import { NewUser } from "../../types/types";
import { addressLibrary } from "../../utils/addressLibrary";

export const Register = () => {
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [repeatPassValue, setRepeatPassValue] = useState<string>("");
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const { email, password, confirmPass } = LOGIN_LABELS;
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
