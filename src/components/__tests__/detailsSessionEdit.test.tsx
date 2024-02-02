import { it, vi, expect, describe, afterEach } from "vitest";
import { cleanup, fireEvent, screen } from "@testing-library/react";
import { MOCK_FUNCTIONS, MOCK_SESSION } from "../../test-utils/test-mock-data";
import { renderWithRouter } from "../../test-utils/test-utils";
import { TextInputField } from "../TextInputField";
import { DetailsHeaderInfoEdit } from "../session/editSession/DetailsHeaderInfoEdit";
import { SESSION_TEXT_FIELDS_CATEGORIES_LIB } from "../../utils/constants";

afterEach(() => {
  cleanup();
});

describe("Edit mode for for session details", () => {
  const { title } = SESSION_TEXT_FIELDS_CATEGORIES_LIB;

  it("Renders working shared text field", () => {
    const textFieldSpy = vi.spyOn(MOCK_FUNCTIONS, "mockOnChange");
    const target = { value: "new value" };

    renderWithRouter(
      <TextInputField
        required={false}
        label={"label"}
        fieldValue={"value"}
        onChangeFunction={MOCK_FUNCTIONS.mockOnChange}
        limit={100}
        chars={target.value.length}
      />
    );

    const textField = screen.getByLabelText("Label");
    fireEvent.change(textField, { target: target });
    expect(textFieldSpy).toHaveBeenCalledWith("new value");
  });

  it("Edit form properly manages user's input", () => {
    const data: string[] = [];
    for (let i = 0; i < 101; i++) {
      data.push(`${i !== 100 ? "a" : "b"}`);
    }

    renderWithRouter(
      <DetailsHeaderInfoEdit
        category={title}
        data={data.join("")}
        session={MOCK_SESSION}
        setIsEditable={MOCK_FUNCTIONS.mockOnChange}
        isRequired={false}
      />
    );

    const textField = screen.getByRole("textbox");
    fireEvent.change(textField, { target: { value: data.join("") } });
    expect(textField).toHaveValue(data.join("").substring(0, 100));
  });
});
