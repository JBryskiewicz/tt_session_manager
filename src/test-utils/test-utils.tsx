import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ReactElement } from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";

export const renderWithRouter = (ui: ReactElement) => {
  return render(
    <Provider store={store}>
      <MemoryRouter>{ui}</MemoryRouter>
    </Provider>
  );
};
