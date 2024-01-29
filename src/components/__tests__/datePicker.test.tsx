import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, screen } from "@testing-library/react";
import { DateChip } from "../datePicker/DateChip";
import { renderWithRouter } from "../../test-utils/test-utils";
import { applyDate } from "../../utils/supportFunctions/dateHandlers";
import { DATE_TEST_IDS } from "../../utils/constants";
import { MOCK_FUNCTIONS } from "../../test-utils/test-mock-data";

afterEach(() => {
  cleanup();
});

describe("DatePicker & date chip elements", () => {
  const { creationDateID, plannedDateID } = DATE_TEST_IDS;

  it("Renders DateChip element with correct date", () => {
    const date = new Date().toISOString();
    renderWithRouter(
      <DateChip testID={creationDateID} label={`created: ${applyDate(date)}`} />
    );

    const dateElement = screen.getByTestId(creationDateID);
    const expectedResult = `created: ${date.substring(0, 10)}`;
    expect(dateElement.firstElementChild?.innerHTML).toBe(expectedResult);
  });

  it("Renders clickable DateChip element", () => {
    const buttonSpy = vi.spyOn(MOCK_FUNCTIONS, "buttonFunction");
    const { buttonFunction } = MOCK_FUNCTIONS;
    const date = new Date().toISOString();

    renderWithRouter(
      <DateChip
        testID={plannedDateID}
        label={`created: ${applyDate(date)}`}
        isButton={true}
        setClicked={buttonFunction}
      />
    );

    const dateButton = screen.getByTestId(plannedDateID);
    dateButton.click();
    expect(buttonSpy).toHaveBeenCalled();
  });
});
