import { FormEvent, useState } from "react";
import { Box } from "@mui/system";
import { Paper, Typography } from "@mui/material";
import { LoginInputField } from "./LoginInputField";
import { useNavigate } from "react-router-dom";
import { LOGIN_BUTTONS, LOGIN_LABELS } from "../../utils/constants";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { LoginButtons } from "../buttons/LoginButtons";
import { onRegisterSubmit } from "../../utils/supportFunctions/loginHandlers";
import { AuthValidationMessage } from "./AuthValidationMessage";

export const Register = () => {
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [repeatPassValue, setRepeatPassValue] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [validated, setValidated] = useState<boolean>(true);
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const { email, password, confirmPass } = LOGIN_LABELS;
  const { register, toLogin } = LOGIN_BUTTONS;

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    onRegisterSubmit(
      emailValue,
      passwordValue,
      repeatPassValue,
      createUserWithEmailAndPassword,
      navigate,
      setErrorMessage,
      setValidated,
      event
    );
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
          {validated ? null : <AuthValidationMessage msg={errorMessage} />}
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
