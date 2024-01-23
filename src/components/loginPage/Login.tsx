import { useState } from "react";
import { Box } from "@mui/system";
import { Button, Paper, Typography } from "@mui/material";
import { LoginInputField } from "./LoginInputField";
import { Link } from "react-router-dom";
import { LOGIN_LABELS } from "../../utils/constants";

export const Login = () => {
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");

  const { email, password } = LOGIN_LABELS;

  return (
    <form>
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
              Log-in
            </Button>
            <Link to="/register">
              <Button variant="contained">Register</Button>
            </Link>
          </Box>
        </Paper>
      </Box>
    </form>
  );
};
