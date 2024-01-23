import { TextField } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

type Props = {
  label: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};

export const LoginInputField = ({ label, value, setValue }: Props) => {
  return (
    <TextField
      required
      id="outlined-textarea"
      label={label}
      value={value}
      sx={{ width: "100%" }}
      onChange={(event) => setValue(event.target.value)}
    />
  );
};
