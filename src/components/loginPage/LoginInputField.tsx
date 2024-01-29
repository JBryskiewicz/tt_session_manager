import { TextField } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

type Props = {
  label: string;
  value: string;
  type: string;
  setValue: Dispatch<SetStateAction<string>>;
};

export const LoginInputField = ({ label, value, setValue, type }: Props) => {
  return (
    <TextField
      required
      id={label}
      label={label}
      value={value}
      type={type}
      sx={{ width: "100%" }}
      onChange={(event) => setValue(event.target.value)}
    />
  );
};
