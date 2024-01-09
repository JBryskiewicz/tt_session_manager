import { TextField } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

type Props = {
  label: string;
  fieldValue: string;
  onChangeFunction: Dispatch<SetStateAction<string>>;
};

export const HeaderInputField = ({
  label,
  fieldValue,
  onChangeFunction,
}: Props) => {
  return (
    <TextField
      id="outlined-textarea"
      label={label}
      value={fieldValue}
      sx={{ width: "100%" }}
      onChange={(event) => onChangeFunction(event.target.value)}
    />
  );
};
