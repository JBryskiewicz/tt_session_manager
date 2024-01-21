import { DatePicker } from "antd";
import { Dispatch, SetStateAction } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchSession, selectOneSession } from "../../redux/sessionSlice";
import { Session } from "../../types/types";
import { updateSession } from "../../utils/API_communication";
import { Box } from "@mui/system";

type Props = {
  setClicked: Dispatch<SetStateAction<boolean>>;
};

export const CustomDatePicker = ({ setClicked }: Props) => {
  const session: Session = useAppSelector(selectOneSession);
  const dispatch = useAppDispatch();

  const onEditChange = async (date: any): Promise<void> => {
    const requiredDate: string = new Date(date).toISOString();

    const modifiedSession: Session = { ...session };
    modifiedSession.plannedDate = requiredDate;

    await updateSession(session.id, modifiedSession);
    const id = session.id.toString();
    dispatch(fetchSession({ id }));

    setClicked(false);
  };

  return (
    <Box className="date-picker-box">
      <DatePicker onChange={onEditChange} />
    </Box>
  );
};
