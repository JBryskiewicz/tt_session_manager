import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ReactElement } from "react";

export const renderWithRouter = (ui: ReactElement) => {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
};
