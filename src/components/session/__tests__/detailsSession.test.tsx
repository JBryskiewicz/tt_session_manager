import { describe, expect, it, vi } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithRouter } from "../../../utils/test-utils";
import { DetailsActions } from "../detailsSession/DetailsActions";
import { DetailsHeaderInformation } from "../detailsSession/DetailsHeaderInformation";
import { MOCK_CATEGORY, MOCK_DATA } from "../../../utils/test-mock-data";

const mocks = {
  buttonFunction: vi.fn(),
};

describe("renders session details elements", () => {
  it("should render action buttons", () => {
    renderWithRouter(<DetailsActions />);
    const [exitButton, deleteButton] = screen.getAllByTestId("action-btn");
    expect(exitButton.getAttribute("href")).toBe("/");
    expect(deleteButton.getAttribute("href")).toBe("/delete");
  });

  //   it("should render dates section", () => {});

  it("should render information in header section", () => {
    const buttonSpy = vi.spyOn(mocks, "buttonFunction");

    renderWithRouter(
      <DetailsHeaderInformation
        category={MOCK_CATEGORY}
        data={MOCK_DATA}
        setIsEditable={mocks.buttonFunction()}
      />
    );

    const categoryElement = screen.getByText(`${MOCK_CATEGORY}:`);
    expect(categoryElement).toBeInTheDocument();

    const dataElement = screen.getByText(MOCK_DATA);
    expect(dataElement).toBeInTheDocument();

    const editButton = screen.getByText("Edit");
    editButton.click();
    expect(buttonSpy).toHaveBeenCalled();
  });

  it("should render working note / npc section switching buttons", () => {});

  it("should render note / npc section", () => {});
});
