import { DatePicker } from "antd";
import { Dispatch, SetStateAction } from "react";

type Props = {
  setNewDate: Dispatch<SetStateAction<string>>;
};

export const CustomDatePicker = ({ setNewDate }: Props) => {
  const onChange = (date: any, dateString: string) => {
    const finalDate = new Date(date).toISOString();
    setNewDate(finalDate);
  };
  return <DatePicker onChange={onChange} />;
};
