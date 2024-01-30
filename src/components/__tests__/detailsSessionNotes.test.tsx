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
  SESSION_FIELDS_CATEGORIES,
} from "../../utils/constants";

const mockNote = MOCK_DATA_COLLECTION[0];

afterEach(() => {
  cleanup();
});

describe("renders session details notes & npcs components", () => {
  it("Renders note / npc section list", () => {
    renderWithRouter(
      <DetailsNotesList
        selected={mockNote.id}
        dataCollection={MOCK_DATA_COLLECTION}
        setSelected={MOCK_FUNCTIONS.buttonFunction}
      />
    );

    const listElements = screen.getAllByTestId(NOTES_LIST_TEST_ID);
    expect(listElements.length).toBe(MOCK_DATA_COLLECTION.length);
  });

  it("Renders note / npc section's list element", () => {
    renderWithRouter(
      <DetailsNotesListElement
        id={mockNote.id}
        selected={mockNote.id}
        name={mockNote.name}
        setSelected={MOCK_FUNCTIONS.buttonFunction}
      />
    );

    const listElement = screen.getByText(mockNote.name);
    expect(listElement).toBeInTheDocument();
  });

  it("Renders note / npc information", () => {
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
