import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { renderWithRouter } from "../../test-utils/test-utils";
import { ErrorPageView } from "../errorPages/ErrorPageView";
import { ERROR_MESSAGE_LIB } from "../../utils/libs/constants";

const { pageNotFound: notFound } = ERROR_MESSAGE_LIB;

describe("Error pages components", () => {
  it("Renders Error Page View component", () => {
    renderWithRouter(<ErrorPageView errorMsg={notFound} />);
    const information = screen.getByText("Seems like this page does not exist");
    expect(information).toBeInTheDocument();
  });
});
