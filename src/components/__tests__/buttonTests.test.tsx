import { cleanup, screen } from "@testing-library/react";
import { it, vi, expect, describe, afterEach } from "vitest";
import { renderWithRouter } from "../../utils/test-utils";
import { ActionButton } from "../buttons/ActionButton";
import {
  ACTION_BUTTON_TEST_ID,
  EDIT_STATE_BUTTON_LABELS,
  SESSION_ACTION_CATEGORIES,
} from "../../utils/constants";
import { AddEntryButton } from "../buttons/AddEntryButton";
import { MOCK_FUNCTIONS } from "../../utils/test-mock-data";
import { DeleteButton } from "../buttons/DeleteButton";
import { EditStateButton } from "../buttons/EditStateButton";
import { SaveButton } from "../buttons/SaveButton";
import { addressLibrary } from "../../utils/addressLibrary";

describe("Testing button components", () => {
  afterEach(() => {
    cleanup();
  });

  it("Renders ACTION BUTTON component with desired navigation", () => {
    const { exit } = SESSION_ACTION_CATEGORIES;
    const { dashboard } = addressLibrary;
    renderWithRouter(
      <ActionButton
        addressPath={dashboard}
        testId={ACTION_BUTTON_TEST_ID}
        label={exit}
      />
    );

    const navLink = screen.getByTestId(ACTION_BUTTON_TEST_ID);
    expect(navLink.getAttribute("href")).toBe("/");
  });

  it("Renders clickable ADD ENTRY BUTTON with working onClick", () => {
    const buttonSpy = vi.spyOn(MOCK_FUNCTIONS, "buttonFunction");
    const { buttonFunction } = MOCK_FUNCTIONS;
    const { addNote } = EDIT_STATE_BUTTON_LABELS;

    renderWithRouter(
      <AddEntryButton onClick={buttonFunction} label={addNote} />
    );

    const entryButton = screen.getByText(addNote);
    entryButton.click();
    expect(buttonSpy).toHaveBeenCalled();
  });

  it("Renders clickable DELETE BUTTON with working onClick", () => {
    const buttonSpy = vi.spyOn(MOCK_FUNCTIONS, "buttonFunction");
    const { buttonFunction } = MOCK_FUNCTIONS;
    const { remove } = SESSION_ACTION_CATEGORIES;

    renderWithRouter(<DeleteButton onClick={buttonFunction} label={remove} />);

    const deleteButton = screen.getByText(remove);
    deleteButton.click();
    expect(buttonSpy).toHaveBeenCalled();
  });

  it("Renders clickable EDIT BUTTON with working onClick", () => {
    const buttonSpy = vi.spyOn(MOCK_FUNCTIONS, "buttonFunction");
    const { buttonFunction } = MOCK_FUNCTIONS;
    const { edit } = EDIT_STATE_BUTTON_LABELS;

    renderWithRouter(<EditStateButton label={edit} onClick={buttonFunction} />);

    const editButton = screen.getByText(edit);
    editButton.click();
    expect(buttonSpy).toHaveBeenCalled();
  });

  it("Renders SAVE BUTTON component", () => {
    const { save } = EDIT_STATE_BUTTON_LABELS;
    renderWithRouter(<SaveButton label={save} />);

    const saveButton = screen.getByText(save);
    expect(saveButton).toBeInTheDocument();
  });
});
