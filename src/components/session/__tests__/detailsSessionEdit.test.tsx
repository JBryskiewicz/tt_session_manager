import { it, vi, expect, describe, afterEach } from "vitest";
import { cleanup, fireEvent, screen } from "@testing-library/react";
import { DetailsHeaderInfoEdit } from "../editSession/DetailsHeaderInfoEdit";
import { renderWithRouter } from "../../../utils/test-utils";
import { SESSION_FIELDS } from "../../../utils/constants";
import { Session } from "../../../types/types";
import { HeaderInputField } from "../editSession/HeaderInputField";
import { SetStateAction } from "react";

const mocks = {
  buttonFunction: vi.fn(),
  mockOnChange: vi.fn(),
};

const { title } = SESSION_FIELDS;

const mockDataField = "mock description for data field";

const mockSession: Session = {
  id: 0,
  name: "",
  description: "",
  creationDate: new Date().toISOString(),
  plannedDate: null,
  editedDate: null,
  edited: false,
  notes: [{ id: 0, name: "", information: "" }],
  npcs: [{ id: 0, name: "", information: "", avatar: "" }],
};

afterEach(() => {
  cleanup();
});

describe("Edit mode for for session details", () => {
  it("Should render clickable save button for header information edit", () => {
    const buttonSpy = vi.spyOn(mocks, "buttonFunction");

    renderWithRouter(
      <DetailsHeaderInfoEdit
        category={title}
        data={mockDataField}
        session={mockSession}
        setIsEditable={mocks.buttonFunction()}
      />
    );

    const saveButton = screen.getByText("Save");
    expect(saveButton).toBeInTheDocument();
    saveButton.click();
    expect(buttonSpy).toHaveBeenCalled();
  });

  it("Should render clickable cancel button for header information edit", () => {
    const buttonSpy = vi.spyOn(mocks, "buttonFunction");

    renderWithRouter(
      <DetailsHeaderInfoEdit
        category={title}
        data={mockDataField}
        session={mockSession}
        setIsEditable={mocks.buttonFunction}
      />
    );

    const cancelButton = screen.getByText("Cancel");
    expect(cancelButton).toBeInTheDocument();
    cancelButton.click();
    expect(buttonSpy).toHaveBeenCalled();
  });

  it("Should render working text field", () => {
    const textFieldSpy = vi.spyOn(mocks, "mockOnChange");

    renderWithRouter(
      <HeaderInputField
        label={"name"}
        fieldValue={"value"}
        onChangeFunction={mocks.mockOnChange}
      />
    );

    const textField = screen.getByLabelText("name");
    fireEvent.change(textField, { target: { value: "new value" } });
    expect(textFieldSpy).toHaveBeenCalledWith("new value");
  });
});
