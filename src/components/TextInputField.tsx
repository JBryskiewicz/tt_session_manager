import { TextField } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

type Props = {
  required: boolean;
  label: string;
  fieldValue: string;
  onChangeFunction: Dispatch<SetStateAction<string>>;
  textarea?: boolean;
};

export const TextInputField = ({
  required,
  label,
  fieldValue,
  onChangeFunction,
  textarea,
}: Props) => {
  const processedLabel: string =
    label.charAt(0).toUpperCase() + label.substring(1, label.length);

  if (textarea) {
    return (
      <TextField
        required={required}
        id="outlined-textarea"
        label={processedLabel}
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
      label={processedLabel}
      value={fieldValue}
      sx={{ width: "100%" }}
      onChange={(event) => onChangeFunction(event.target.value)}
    />
  );
};
