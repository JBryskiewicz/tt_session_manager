import { SESSION_CATEGORY_LIB } from "../../../utils/constants";
import { ActionButtonSection } from "../../ActionButtonSection";
import { SessionNewHeader } from "./SessionNewHeader";

const { newSession } = SESSION_CATEGORY_LIB;

export function SessionNew() {
  return (
    <>
      <ActionButtonSection sessionCategory={newSession} />
      <SessionNewHeader />
    </>
  );
}
