import { HeaderDatesSection } from "../../datePicker/HeaderDatesSection";
import { useSelector } from "react-redux";
import { DetailsHeaderInformation } from "./DetailsHeaderInformation";
import { useState } from "react";
import { DetailsHeaderInfoEdit } from "../editSession/DetailsHeaderInfoEdit";
import {
  SESSION_CATEGORY_LIB,
  SESSION_TEXT_FIELDS_CATEGORIES_LIB,
} from "../../../utils/constants";
import { selectOneSession } from "../../../redux/sessionSlice";

export const DetailsHeader = () => {
  const [isEditable, setIsEditable] = useState<boolean[]>([false, false]);
  const session = useSelector(selectOneSession);
  const { name, description } = session;
  const { title, desc } = SESSION_TEXT_FIELDS_CATEGORIES_LIB;
  const { editSession } = SESSION_CATEGORY_LIB;

  return (
    <>
      <HeaderDatesSection
        category={editSession}
        creationDate={session.creationDate}
        plannedDate={session.plannedDate}
        editedDate={session.editedDate}
      />
      {!isEditable[0] ? (
        <DetailsHeaderInformation
          category={title}
          data={name}
          setIsEditable={setIsEditable}
        />
      ) : (
        <DetailsHeaderInfoEdit
          category={title}
          data={name}
          session={session}
          setIsEditable={setIsEditable}
          isRequired={true}
        />
      )}
      {!isEditable[1] ? (
        <DetailsHeaderInformation
          category={desc}
          data={description}
          setIsEditable={setIsEditable}
        />
      ) : (
        <DetailsHeaderInfoEdit
          category={desc}
          data={description}
          session={session}
          setIsEditable={setIsEditable}
          isRequired={false}
        />
      )}
    </>
  );
};
