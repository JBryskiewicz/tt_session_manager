import { it, vi, expect, describe, afterEach } from "vitest";
import { cleanup, fireEvent, screen } from "@testing-library/react";

import { MOCK_FUNCTIONS } from "../../utils/test-mock-data";
import { renderWithRouter } from "../../utils/test-utils";
import { TextInputField } from "../TextInputField";

afterEach(() => {
  cleanup();
});

describe("Edit mode for for session details", () => {
  it("Renders working shared text field", () => {
    const textFieldSpy = vi.spyOn(MOCK_FUNCTIONS, "mockOnChange");

    renderWithRouter(
      <TextInputField
        required={false}
        label={"label"}
        fieldValue={"value"}
        onChangeFunction={MOCK_FUNCTIONS.mockOnChange}
      />
    );

    const textField = screen.getByLabelText("Label");
    fireEvent.change(textField, { target: { value: "new value" } });
    expect(textFieldSpy).toHaveBeenCalledWith("new value");
  });
});
