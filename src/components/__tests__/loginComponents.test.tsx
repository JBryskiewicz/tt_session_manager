import { cleanup, fireEvent, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { MOCK_FUNCTIONS } from "../../test-utils/test-mock-data";
import { renderWithRouter } from "../../test-utils/test-utils";
import { LoginInputField } from "../loginPage/LoginInputField";
import { AuthValidationMessage } from "../loginPage/AuthValidationMessage";

describe("Login / Register components", () => {
  afterEach(() => {
    cleanup();
  });

  it("Renders working input field for login / register components", () => {
    const textFieldSpy = vi.spyOn(MOCK_FUNCTIONS, "mockOnChange");
    const target = { value: "new value" };

    renderWithRouter(
      <LoginInputField
        label={"login"}
        value={"test"}
        type="text"
        setValue={MOCK_FUNCTIONS.mockOnChange}
      />
    );

    //login * - since component renders label as required
    const textField = screen.getByLabelText("login *");
    fireEvent.change(textField, { target: target });
    expect(textFieldSpy).toHaveBeenCalledWith("new value");
  });

  it("Renders validation message", () => {
    const msg = "test auth message";
    renderWithRouter(<AuthValidationMessage msg={msg} />);

    const message = screen.getByText(msg);
    expect(message).toBeInTheDocument();
  });
});
