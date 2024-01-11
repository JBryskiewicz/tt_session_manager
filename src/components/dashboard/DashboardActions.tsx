import { ActionButton } from "../buttons/ActionButton";

export const DashboardActions = () => {
  return (
    <ActionButton
      addressPath="/new-session"
      label="New Session"
      testId="action-btn"
    />
  );
};
