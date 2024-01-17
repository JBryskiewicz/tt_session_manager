import { it, vi, expect, describe, afterEach } from "vitest";
import { cleanup, screen } from "@testing-library/react";
import {
  MOCK_DATA_COLLECTION,
  MOCK_FUNCTIONS,
} from "../../utils/test-mock-data";
import { renderWithRouter } from "../../utils/test-utils";
import { DetailsNotesButton } from "../session/detailsSession/DetailsNotesButton";
import { DetailsNotesList } from "../session/detailsSession/DetailsNotesList";
import { DetailsNotesListElement } from "../session/detailsSession/DetailsNotesListElement";
import { DetailsNotesSharedInformation } from "../session/detailsSession/DetailsNotesSharedInformation";
import {
  NOTES_LIST_TEST_ID,
  SESSION_FIELDS_CATEGORIES,
} from "../../utils/constants";

const mockNote = MOCK_DATA_COLLECTION[0];

afterEach(() => {
  cleanup();
});

describe("renders session details notes & npcs components", () => {
  it("should render working note / npc section switching buttons", () => {
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
    expect(switchButton).toBeInTheDocument();
    switchButton.click();
    expect(buttonSpy).toHaveBeenCalled();
  });

  it("should render note / npc section list", () => {
    renderWithRouter(
      <DetailsNotesList
        dataId={mockNote.id}
        dataCollection={MOCK_DATA_COLLECTION}
        setDataId={MOCK_FUNCTIONS.buttonFunction}
      />
    );

    const listElements = screen.getAllByTestId(NOTES_LIST_TEST_ID);
    expect(listElements.length).toBe(MOCK_DATA_COLLECTION.length);
  });

  it("should render note / npc section's list element", () => {
    renderWithRouter(
      <DetailsNotesListElement
        id={mockNote.id}
        dataId={mockNote.id}
        name={mockNote.name}
        setDataId={MOCK_FUNCTIONS.buttonFunction}
      />
    );

    const listElement = screen.getByText(mockNote.name);
    expect(listElement).toBeInTheDocument();
  });

  it("should render note / npc information", () => {
    const data = MOCK_DATA_COLLECTION[0];
    const { note } = SESSION_FIELDS_CATEGORIES;

    renderWithRouter(
      <DetailsNotesSharedInformation
        data={data}
        setIsEditable={MOCK_FUNCTIONS.buttonFunction}
        category={note}
      />
    );
    const information = screen.getByText(mockNote.information);
    expect(information).toBeInTheDocument();
  });
});
