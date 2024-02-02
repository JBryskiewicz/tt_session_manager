import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { renderWithRouter } from "../../test-utils/test-utils";
import { PageNotFound } from "../errorPages/PageNotFound";
import { SessionNotFound } from "../errorPages/SessionNotFound";

describe("Error pages components", () => {
  it("Renders Page Not Found component", () => {
    renderWithRouter(<PageNotFound />);
    const information = screen.getByText("Seems like this page does not exist");
    expect(information).toBeInTheDocument();
  });

  it("Renders Page Not Found component", () => {
    renderWithRouter(<SessionNotFound />);
    const information = screen.getByText("Session with this ID not found!");
    expect(information).toBeInTheDocument();
  });
});
