import { FormEvent, useState } from "react";
import { Box } from "@mui/system";
import { Paper, Typography } from "@mui/material";
import { LoginInputField } from "./LoginInputField";
import { useNavigate } from "react-router-dom";
import { LOGIN_BUTTONS, LOGIN_LABELS } from "../../utils/constants";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { LoginButtons } from "../buttons/LoginButtons";
import { AuthValidationMessage } from "./AuthValidationMessage";
import { onLoginSubmit } from "../../utils/supportFunctions/LoginHandlers";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { addressLibrary } from "../../utils/addressLibrary";
import { CustomLoading } from "../loaders/CustomLoading";

const { email, password } = LOGIN_LABELS;
const { login, register, toRegister } = LOGIN_BUTTONS;
const { dashboard } = addressLibrary;

export const Login = () => {
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [validated, setValidated] = useState<boolean>(true);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    onLoginSubmit(
      emailValue,
      passwordValue,
      signInWithEmailAndPassword,
      navigate,
      setErrorMessage,
      setValidated,
      event
    );
  };

  if (user || loading) {
    navigate(dashboard);
    return <CustomLoading />;
  }

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
          {validated ? null : <AuthValidationMessage msg={errorMessage} />}
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
