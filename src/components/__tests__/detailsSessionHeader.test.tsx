import { afterEach, describe, expect, it } from "vitest";
import { cleanup, screen } from "@testing-library/react";
import { DATE_TEST_IDS } from "../../utils/constants";
import {
  MOCK_CREATION_DATE,
  MOCK_PLANNED_DATE,
  MOCK_FUNCTIONS,
  MOCK_CATEGORY,
  MOCK_STRING,
} from "../../utils/test-mock-data";
import { renderWithRouter } from "../../utils/test-utils";
import { HeaderDatesSection } from "../HeaderDatesSection";
import { DetailsHeaderInformation } from "../session/detailsSession/DetailsHeaderInformation";
import { applyDate } from "../../utils/supportFunctions";

afterEach(() => {
  cleanup();
});

describe("renders session details action & header elements", () => {
  it("should render dates section for session details (not edited by default)", async () => {
    const { creationDateID, plannedDateID } = DATE_TEST_IDS;

    renderWithRouter(
      <HeaderDatesSection
        creationDate={MOCK_CREATION_DATE}
        plannedDate={MOCK_PLANNED_DATE}
        editedDate={null}
      />
    );

    const creationDate = (await screen.findByTestId(creationDateID))
      .lastElementChild?.innerHTML;
    expect(creationDate).toBe(`created: ${MOCK_CREATION_DATE}`);

    const plannedDate = (await screen.findByTestId(plannedDateID))
      .lastElementChild?.innerHTML;
    expect(plannedDate).toBe(`planned: ${MOCK_PLANNED_DATE}`);
  });

  it("should render dates section for session details", async () => {
    const plannedDate: string = applyDate(new Date().toISOString());

    renderWithRouter(
      <HeaderDatesSection
        creationDate={null}
        plannedDate={plannedDate}
        editedDate={null}
      />
    );

    const plannedDateElement = (await screen.findByTestId("planned-date"))
      .lastElementChild?.innerHTML;
    expect(plannedDateElement).toBe(`planned: ${plannedDate}`);
  });

  it("should render information in header section", () => {
    renderWithRouter(
      <DetailsHeaderInformation
        category={MOCK_CATEGORY}
        data={MOCK_STRING}
        setIsEditable={MOCK_FUNCTIONS.buttonFunction()}
      />
    );

    const categoryElement = screen.getByText(MOCK_CATEGORY);
    expect(categoryElement).toBeInTheDocument();

    const dataElement = screen.getByText(MOCK_STRING);
    expect(dataElement).toBeInTheDocument();
  });
});
