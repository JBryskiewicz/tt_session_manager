import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { DashboardActions } from "../DashboardActions";
import { DashboardSessionList } from "../DashboardSessionList";
import { renderWithRouter } from "../../../utils/test-utils";
import { MOCK_SESSION_LIST } from "../../../utils/test-mock-data";

describe("Renders dashboard elements", () => {
  it("Should render working new session link button", () => {
    renderWithRouter(<DashboardActions />);

    const linkButton = screen.getByRole("link");
    expect(linkButton.getAttribute("href")).toBe("/new-session");
  });

  it("Should render session cards from collection", () => {
    renderWithRouter(<DashboardSessionList sessionList={MOCK_SESSION_LIST} />);

    const cardElements = screen.getAllByTestId("session-card");
    expect(cardElements.length).toBe(MOCK_SESSION_LIST.length);
  });

  it("Should render session card details with working button", () => {
    const session = MOCK_SESSION_LIST[0];
    const id = session.id;
    const linkButton = screen.getByTestId("details-btn");
    expect(linkButton.getAttribute("href")).toBe(`/session-details/${id}`);
  });
});
