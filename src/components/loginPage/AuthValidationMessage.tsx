import { Typography } from "@mui/material";

type Props = {
  msg: string;
};

export const AuthValidationMessage = ({ msg }: Props) => {
  return <Typography sx={{ color: "darkred" }}>{msg}</Typography>;
};
