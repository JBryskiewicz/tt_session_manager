import { describe, expect, it, vi } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithRouter } from "../../../utils/test-utils";
import { DetailsActions } from "../detailsSession/DetailsActions";
import { DetailsHeaderInformation } from "../detailsSession/DetailsHeaderInformation";
import {
  MOCK_CATEGORY,
  MOCK_FUNCTIONS,
  MOCK_STRING,
  MOCK_DATE,
} from "../../../utils/test-mock-data";
import { DetailsHeaderDates } from "../detailsSession/DetailsHeaderDates";

describe("renders session details action & header elements", () => {
  it("should render action buttons", () => {
    renderWithRouter(<DetailsActions />);
    const [exitButton, deleteButton] = screen.getAllByTestId("action-btn");
    expect(exitButton.getAttribute("href")).toBe("/");
    expect(deleteButton.getAttribute("href")).toBe("/delete");
  });

  it("should render dates section", () => {
    renderWithRouter(
      <DetailsHeaderDates
        creationDate={MOCK_DATE}
        plannedDate={MOCK_DATE}
        editedDate={MOCK_DATE}
      />
    );
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
