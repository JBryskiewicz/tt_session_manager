import { FormEvent, useState } from "react";
import { Box } from "@mui/system";
import { Paper, Typography } from "@mui/material";
import { LoginInputField } from "./LoginInputField";
import { useNavigate } from "react-router-dom";
import {
  BUTTON_LABELS_LIB,
  LOGIN_TEXTFIELD_LABELS_LIB,
} from "../../utils/libs/constants";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { LoginButtons } from "../buttons/LoginButtons";
import { onRegisterSubmit } from "../../utils/supportFunctions/LoginHandlers";
import { AuthValidationMessage } from "./AuthValidationMessage";
import { CustomLoading } from "../loaders/CustomLoading";
import { ADDRESS_LIB } from "../../utils/libs/constants";

const { email, password, confirmPass } = LOGIN_TEXTFIELD_LABELS_LIB;
const { register, toLogin } = BUTTON_LABELS_LIB;
const { dashboard } = ADDRESS_LIB;

export const Register = () => {
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [repeatPassValue, setRepeatPassValue] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [validated, setValidated] = useState<boolean>(true);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

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

  if (user || loading) {
    navigate(dashboard);
    return <CustomLoading />;
  }

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
