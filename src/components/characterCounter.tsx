import { Typography } from "antd";

type Props = {
  inputLength: number;
  chars: number;
  limit: number;
};

export const CharacterCounter = ({ inputLength, chars, limit }: Props) => {
  return (
    <Typography
      className={inputLength < limit ? "input-counter" : "input-counter-limit"}
    >
      {chars}/{limit}
    </Typography>
  );
};
