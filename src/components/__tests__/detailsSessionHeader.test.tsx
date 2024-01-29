import { afterEach, describe, expect, it } from "vitest";
import { cleanup, screen } from "@testing-library/react";
import {
  MOCK_FUNCTIONS,
  MOCK_CATEGORY,
  MOCK_STRING,
} from "../../test-utils/test-mock-data";
import { renderWithRouter } from "../../test-utils/test-utils";
import { DetailsHeaderInformation } from "../session/detailsSession/DetailsHeaderInformation";

afterEach(() => {
  cleanup();
});

describe("Session details header elements", () => {
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
