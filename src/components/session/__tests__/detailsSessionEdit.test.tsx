import { it, vi, expect, describe, afterEach } from "vitest";
import { cleanup, fireEvent, screen } from "@testing-library/react";
import { DetailsHeaderInfoEdit } from "../editSession/DetailsHeaderInfoEdit";
import { renderWithRouter } from "../../../utils/test-utils";
import { SESSION_FIELDS_CATEGORIES } from "../../../utils/constants";
import { TextInputField } from "../../TextInputField";
import { DetailsNotesSharedInfoEdit } from "../editSession/DetailsNotesSharedInfoEdit";
import {
  MOCK_FUNCTIONS,
  MOCK_SESSION,
  MOCK_STRING,
} from "../../../utils/test-mock-data";

const { title } = SESSION_FIELDS_CATEGORIES;

afterEach(() => {
  cleanup();
});

describe("Edit mode for for session details", () => {
  it("Should render working shared text field", () => {
    const textFieldSpy = vi.spyOn(MOCK_FUNCTIONS, "mockOnChange");

    renderWithRouter(
      <TextInputField
        required={false}
        label={"label"}
        fieldValue={"value"}
        onChangeFunction={MOCK_FUNCTIONS.mockOnChange}
      />
    );

    const textField = screen.getByLabelText("label");
    fireEvent.change(textField, { target: { value: "new value" } });
    expect(textFieldSpy).toHaveBeenCalledWith("new value");
  });

  it("Should render clickable save button for header information edit", () => {
    const buttonSpy = vi.spyOn(MOCK_FUNCTIONS, "buttonFunction");

    renderWithRouter(
      <DetailsHeaderInfoEdit
        category={title}
        data={MOCK_STRING}
        session={MOCK_SESSION}
        setIsEditable={MOCK_FUNCTIONS.buttonFunction()}
      />
    );

    const saveButton = screen.getByText("Save");
    expect(saveButton).toBeInTheDocument();
    saveButton.click();
    expect(buttonSpy).toHaveBeenCalled();
  });

  it("Should render clickable cancel button for header information edit", () => {
    const buttonSpy = vi.spyOn(MOCK_FUNCTIONS, "buttonFunction");

    renderWithRouter(
      <DetailsHeaderInfoEdit
        category={title}
        data={MOCK_STRING}
        session={MOCK_SESSION}
        setIsEditable={MOCK_FUNCTIONS.buttonFunction}
      />
    );

    const cancelButton = screen.getByText("Cancel");
    expect(cancelButton).toBeInTheDocument();
    cancelButton.click();
    expect(buttonSpy).toHaveBeenCalled();
  });

  it("Should render clickable save button for notes / npc section edit", () => {
    const buttonSpy = vi.spyOn(MOCK_FUNCTIONS, "buttonFunction");

    renderWithRouter(
      <DetailsNotesSharedInfoEdit
        data={MOCK_SESSION.notes[0]}
        setIsEditable={MOCK_FUNCTIONS.buttonFunction()}
        category={title}
      />
    );

    const saveButton = screen.getByText("Save");
    expect(saveButton).toBeInTheDocument();
    saveButton.click();
    expect(buttonSpy).toHaveBeenCalled();
  });

  it("Should render clickable cancel button for header information edit", () => {
    const buttonSpy = vi.spyOn(MOCK_FUNCTIONS, "buttonFunction");

    renderWithRouter(
      <DetailsNotesSharedInfoEdit
        data={MOCK_SESSION.notes[0]}
        setIsEditable={MOCK_FUNCTIONS.buttonFunction}
        category={title}
      />
    );

    const cancelButton = screen.getByText("Cancel");
    expect(cancelButton).toBeInTheDocument();
    cancelButton.click();
    expect(buttonSpy).toHaveBeenCalled();
  });
});
