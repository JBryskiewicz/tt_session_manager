import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { DashboardActions } from "../DashboardActions";
import { MemoryRouter } from "react-router-dom";
import { ReactElement } from "react";
import { Session } from "../../../types/types";
import { DashboardSessionList } from "../DashboardSessionList";

const renderWithRouter = (ui: ReactElement) => {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
};

const MOCK_SESSION_LIST: Session[] = [
  {
    id: 999,
    name: "test1",
    description: "test1",
    creationDate: new Date(),
    plannedDate: new Date(),
    editedDate: null,
    edited: false,
    notes: [],
    npcs: [],
  },
];

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
