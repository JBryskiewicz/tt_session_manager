import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, screen } from "@testing-library/react";
import { SESSION_ACTION_CATEGORIES } from "../../utils/constants";
import {
  MOCK_CREATION_DATE,
  MOCK_PLANNED_DATE,
  MOCK_FUNCTIONS,
  MOCK_CATEGORY,
  MOCK_STRING,
} from "../../utils/test-mock-data";
import { renderWithRouter } from "../../utils/test-utils";
import { ActionButtonSection } from "../ActionButtonSection";
import { HeaderDatesSection } from "../HeaderDatesSection";
import { DetailsHeaderInformation } from "../session/detailsSession/DetailsHeaderInformation";

afterEach(() => {
  cleanup();
});

describe("renders session details action & header elements", () => {
  const { details, newSession } = SESSION_ACTION_CATEGORIES;

  it("should render action buttons", () => {
    const details = SESSION_ACTION_CATEGORIES.details;

    renderWithRouter(<ActionButtonSection sessionCategory={details} />);

    const [exitButton, deleteButton] = screen.getAllByTestId("action-btn");
    expect(exitButton.getAttribute("href")).toBe("/");
    expect(deleteButton.getAttribute("href")).toBe("/delete");
  });

  it("should render dates section for session details", async () => {
    renderWithRouter(
      <HeaderDatesSection
        sessionCategory={details}
        creationDate={MOCK_CREATION_DATE}
        plannedDate={MOCK_PLANNED_DATE}
      />
    );

    const creationDate = (await screen.findByTestId("creation-date"))
      .lastElementChild?.innerHTML;
    expect(creationDate).toBe(`created: ${MOCK_CREATION_DATE}`);

    const plannedDate = (await screen.findByTestId("planned-date"))
      .lastElementChild?.innerHTML;
    expect(plannedDate).toBe(`planned: ${MOCK_PLANNED_DATE}`);
  });

  it("should render dates section for session details", async () => {
    renderWithRouter(<HeaderDatesSection sessionCategory={newSession} />);

    const plannedDate = (await screen.findByTestId("planned-date"))
      .lastElementChild?.innerHTML;
    expect(plannedDate).toBe("planned: pick date");
  });

  it("should render information in header section", () => {
    const buttonSpy = vi.spyOn(MOCK_FUNCTIONS, "buttonFunction");

    renderWithRouter(
      <DetailsHeaderInformation
        category={MOCK_CATEGORY}
        data={MOCK_STRING}
        setIsEditable={MOCK_FUNCTIONS.buttonFunction()}
      />
    );

    const categoryElement = screen.getByText(`${MOCK_CATEGORY}:`);
    expect(categoryElement).toBeInTheDocument();

    const dataElement = screen.getByText(MOCK_STRING);
    expect(dataElement).toBeInTheDocument();

    const editButton = screen.getByText("Edit");
    editButton.click();
    expect(buttonSpy).toHaveBeenCalled();
  });
});
