import { cleanup, screen } from "@testing-library/react";
import { it, vi, expect, describe, afterEach } from "vitest";
import { renderWithRouter } from "../../test-utils/test-utils";
import { ActionButton } from "../buttons/ActionButton";
import {
  ACTION_BUTTON_TEST_ID,
  BUTTON_LABELS_LIB,
} from "../../utils/libs/constants";
import { MOCK_FUNCTIONS } from "../../test-utils/test-mock-data";
import { EditStateButton } from "../buttons/EditStateButton";
import { SaveButton } from "../buttons/SaveButton";
import { ADDRESS_LIB } from "../../utils/libs/constants";
import { DetailsNotesButton } from "../buttons/DetailsNotesButton";
import { LoginButtons } from "../buttons/LoginButtons";
import { ConfirmPopout } from "../buttons/ConfirmPopout";
import { DeleteButton } from "../buttons/DeleteButton";
import { AddEntryButton } from "../buttons/AddEntryButton";

const { save, edit, remove, exit, addNote, login, register, toRegister } =
  BUTTON_LABELS_LIB;

describe("Testing button components", () => {
  afterEach(() => {
    cleanup();
  });

  it("Renders ACTION BUTTON component with desired navigation", () => {
    const { dashboard } = ADDRESS_LIB;
    renderWithRouter(
      <ActionButton
        addressPath={dashboard}
        testId={ACTION_BUTTON_TEST_ID}
        label={exit}
      />
    );

    const navLink = screen.getByTestId(ACTION_BUTTON_TEST_ID);
    expect(navLink.getAttribute("href")).toBe("/dashboard");
  });

  it("Renders clickable ADD ENTRY BUTTON with working onClick", () => {
    const buttonSpy = vi.spyOn(MOCK_FUNCTIONS, "buttonFunction");
    const { buttonFunction } = MOCK_FUNCTIONS;

    renderWithRouter(
      <AddEntryButton
        label={addNote}
        popout={false}
        setPopout={buttonFunction}
        onClick={buttonFunction}
      />
    );

    const entryButton = screen.getByText(addNote);
    entryButton.click();
    expect(buttonSpy).toHaveBeenCalled();
  });

  it("Renders Popout window with passed notification", () => {
    const { fillerFunction } = MOCK_FUNCTIONS;

    renderWithRouter(
      <ConfirmPopout
        notification={"confirm action"}
        onClick={fillerFunction}
        setPopout={fillerFunction}
      />
    );

    const notification = screen.getByText("confirm action");
    expect(notification).toBeInTheDocument();
  });

  it("Renders Popout window with working CONFIRM BUTTON", () => {
    const buttonSpy = vi.spyOn(MOCK_FUNCTIONS, "buttonFunction");
    const { buttonFunction, fillerFunction } = MOCK_FUNCTIONS;

    renderWithRouter(
      <ConfirmPopout
        notification={"confirm action"}
        onClick={buttonFunction}
        setPopout={fillerFunction}
      />
    );

    const entryButton = screen.getByText("confirm");
    entryButton.click();
    expect(buttonSpy).toHaveBeenCalled();
  });

  it("Renders Popout window with working CANCEL BUTTON", () => {
    const buttonSpy = vi.spyOn(MOCK_FUNCTIONS, "buttonFunction");
    const { buttonFunction, fillerFunction } = MOCK_FUNCTIONS;

    renderWithRouter(
      <ConfirmPopout
        notification={"confirm action"}
        onClick={fillerFunction}
        setPopout={buttonFunction}
      />
    );

    const entryButton = screen.getByText("cancel");
    entryButton.click();
    expect(buttonSpy).toHaveBeenCalled();
  });

  it("Renders clickable DELETE BUTTON with working onClick", () => {
    const buttonSpy = vi.spyOn(MOCK_FUNCTIONS, "buttonFunction");
    const { buttonFunction } = MOCK_FUNCTIONS;

    renderWithRouter(
      <DeleteButton
        label={remove}
        popout={false}
        setPopout={buttonFunction}
        onClick={buttonFunction}
      />
    );

    const deleteButton = screen.getByText(remove);
    deleteButton.click();
    expect(buttonSpy).toHaveBeenCalled();
  });

  it("Renders working note / npc section switching buttons", () => {
    const buttonSpy = vi.spyOn(MOCK_FUNCTIONS, "buttonFunction");
    const label = "Notes";

    renderWithRouter(
      <DetailsNotesButton
        label={label}
        changeDisplayTo={1}
        selectedWhen={1}
        display={1}
        setDisplay={MOCK_FUNCTIONS.buttonFunction}
      />
    );

    const switchButton = screen.getByText(label);
    switchButton.click();
    expect(buttonSpy).toHaveBeenCalled();
  });

  it("Renders clickable EDIT BUTTON with working onClick", () => {
    const buttonSpy = vi.spyOn(MOCK_FUNCTIONS, "buttonFunction");
    const { buttonFunction } = MOCK_FUNCTIONS;

    renderWithRouter(<EditStateButton label={edit} onClick={buttonFunction} />);

    const editButton = screen.getByText(edit);
    editButton.click();
    expect(buttonSpy).toHaveBeenCalled();
  });

  it("Renders SAVE BUTTON component", () => {
    renderWithRouter(<SaveButton label={save} />);

    const saveButton = screen.getByText(save);
    expect(saveButton).toBeInTheDocument();
  });

  it("Renders LOGIN BUTTONS component", () => {
    renderWithRouter(
      <LoginButtons
        submitButton={login}
        redirectButton={toRegister}
        address={register}
      />
    );

    const loginButton = screen.getByText(login);
    expect(loginButton).toBeInTheDocument();

    const redirectButton = screen.getByText(toRegister);
    const linkElement = redirectButton.closest("a");
    expect(linkElement?.getAttribute("href")).toBe("/register");
  });
});
