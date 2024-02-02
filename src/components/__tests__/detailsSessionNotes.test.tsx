import { it, expect, describe, afterEach } from "vitest";
import { cleanup, screen } from "@testing-library/react";
import {
  MOCK_DATA_COLLECTION,
  MOCK_FUNCTIONS,
} from "../../test-utils/test-mock-data";
import { renderWithRouter } from "../../test-utils/test-utils";
import { DetailsNotesList } from "../session/detailsSession/DetailsNotesList";
import { DetailsNotesListElement } from "../session/detailsSession/DetailsNotesListElement";
import { DetailsNotesSharedInformation } from "../session/detailsSession/DetailsNotesSharedInformation";
import {
  NOTES_LIST_TEST_ID,
  SESSION_TEXT_FIELDS_CATEGORIES_LIB,
} from "../../utils/constants";
import { DetailsNotesButtonGroup } from "../session/detailsSession/DetailsNotesButtonGroup";

const mockNote = MOCK_DATA_COLLECTION[0];

afterEach(() => {
  cleanup();
});

describe("renders session details notes & npcs components", () => {
  it("Renders labels for button groups", () => {
    const { fillerFunction } = MOCK_FUNCTIONS;
    renderWithRouter(
      <DetailsNotesButtonGroup display={0} setDisplay={fillerFunction} />
    );

    const displayElement = screen.getByText("Display");
    expect(displayElement).toBeInTheDocument();

    const createElement = screen.getByText("Create");
    expect(createElement).toBeInTheDocument();
  });

  it("Renders note / npc section list", () => {
    renderWithRouter(
      <DetailsNotesList dataCollection={MOCK_DATA_COLLECTION} />
    );

    const listElements = screen.getAllByTestId(NOTES_LIST_TEST_ID);
    expect(listElements.length).toBe(MOCK_DATA_COLLECTION.length);
  });

  it("Renders note / npc section's list element", () => {
    renderWithRouter(
      <DetailsNotesListElement id={mockNote.id} name={mockNote.name} />
    );

    const listElement = screen.getByText(mockNote.name);
    expect(listElement).toBeInTheDocument();
  });

  it("Renders note / npc information", () => {
    const { note } = SESSION_TEXT_FIELDS_CATEGORIES_LIB;

    renderWithRouter(
      <DetailsNotesSharedInformation
        setIsEditable={MOCK_FUNCTIONS.buttonFunction}
        category={note}
      />
    );

    const information = screen.getByText("info");
    expect(information).toBeInTheDocument();
  });
});
