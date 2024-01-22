import { Box, TextField } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { CharacterCounter } from "./characterCounter";

type Props = {
  label: string;
  fieldValue: string;
  limit: number;
  chars: number;
  onChangeFunction: Dispatch<SetStateAction<string>>;
  required: boolean;
  textarea?: boolean;
};

export const TextInputField = ({
  label,
  fieldValue,
  limit,
  chars,
  onChangeFunction,
  required,
  textarea,
}: Props) => {
  const processedLabel: string =
    label.charAt(0).toUpperCase() + label.substring(1, label.length);

  if (textarea) {
    return (
      <Box className="text-input-box">
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
        <CharacterCounter
          inputLength={fieldValue.length}
          chars={chars}
          limit={limit}
        />
      </Box>
    );
  }

  return (
    <Box className="text-input-box">
      <TextField
        required={required}
        id="outlined-textarea"
        label={processedLabel}
        value={fieldValue}
        sx={{ width: "100%" }}
        onChange={(event) => onChangeFunction(event.target.value)}
      />
      <CharacterCounter
        inputLength={fieldValue.length}
        chars={chars}
        limit={limit}
      />
    </Box>
  );
};
