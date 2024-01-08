import { it, vi, expect, describe } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithRouter } from "../../../utils/test-utils";
import { DetailsNotesButton } from "../detailsSession/DetailsNotesButton";
import { DetailsNotesList } from "../detailsSession/DetailsNotesList";
import { DetailsNotesListElement } from "../detailsSession/DetailsNotesListElement";
import { DetailsNotesSharedInformation } from "../detailsSession/DetailsNotesSharedInformation";
import { Npc, Note } from "../../../types/types";

const mocks = {
  buttonFunction: vi.fn(),
};

const mockNote: Npc | Note = {
  id: 0,
  name: "mocked name",
  information: "mocked information",
};

const mockDataCollection: Npc[] | Note[] = [
  {
    id: 0,
    name: "mocked name 0",
    information: "mocked information 0",
  },
  {
    id: 1,
    name: "mocked name 1",
    information: "mocked information 1",
  },
  {
    id: 2,
    name: "mocked name 2",
    information: "mocked information 2",
  },
];

describe("renders session details notes & npcs elements", () => {
  it("should render working note / npc section switching buttons", () => {
    const buttonSpy = vi.spyOn(mocks, "buttonFunction");
    const label = "Notes";

    renderWithRouter(
      <DetailsNotesButton
        label={label}
        changeDisplayTo={1}
        selectedWhen={1}
        display={1}
        setDisplay={mocks.buttonFunction}
      />
    );

    const switchButton = screen.getByText(label);
    expect(switchButton);
    switchButton.click();
    expect(buttonSpy).toHaveBeenCalled();
  });

  it("should render note / npc section list", () => {
    renderWithRouter(
      <DetailsNotesList
        dataId={mockNote.id}
        dataCollection={mockDataCollection}
        setDataId={mocks.buttonFunction}
      />
    );

    const listElements = screen.getAllByTestId("session-notes-list-element");
    expect(listElements.length).toBe(mockDataCollection.length);
  });

  it("should render note / npc section's list element", () => {
    renderWithRouter(
      <DetailsNotesListElement
        id={mockNote.id}
        dataId={mockNote.id}
        name={mockNote.name}
        setDataId={mocks.buttonFunction}
      />
    );

    const listElement = screen.getByText(mockNote.name);
    expect(listElement).toBeInTheDocument();
  });

  it("should render note / npc information with working clickable edit button", () => {
    const buttonSpy = vi.spyOn(mocks, "buttonFunction");

    renderWithRouter(
      <DetailsNotesSharedInformation
        note={mockNote.information}
        setIsEditable={mocks.buttonFunction}
      />
    );
    const information = screen.getByText(mockNote.information);
    expect(information).toBeInTheDocument();

    const editButton = screen.getByText("Edit");
    editButton.click();
    expect(buttonSpy).toHaveBeenCalled();
  });
});
