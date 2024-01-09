import { TextField } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

type Props = {
  required: boolean;
  label: string;
  fieldValue: string;
  onChangeFunction: Dispatch<SetStateAction<string>>;
  textarea?: boolean;
};

export const HeaderInputField = ({
  required,
  label,
  fieldValue,
  onChangeFunction,
  textarea,
}: Props) => {
  if (textarea) {
    return (
      <TextField
        required={required}
        id="outlined-textarea"
        label={label}
        value={fieldValue}
        rows={14}
        sx={{ width: "100%" }}
        multiline
        onChange={(event) => onChangeFunction(event.target.value)}
      />
    );
  }

  return (
    <TextField
      required={required}
      id="outlined-textarea"
      label={label}
      value={fieldValue}
      sx={{ width: "100%", marginBottom: "1rem" }}
      onChange={(event) => onChangeFunction(event.target.value)}
    />
  );
};
