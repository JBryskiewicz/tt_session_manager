import { SESSION_ACTION_CATEGORIES } from "../../../utils/constants";
import { ActionButtonSection } from "../../ActionButtonSection";
import { SessionNewHeader } from "./SessionNewHeader";

export function SessionNew() {
  const categoryNew = SESSION_ACTION_CATEGORIES.newSession;
  return (
    <>
      <ActionButtonSection sessionCategory={categoryNew} />
      <SessionNewHeader />
    </>
  );
}
