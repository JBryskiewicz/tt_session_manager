import { afterEach, describe, expect, it } from "vitest";
import { cleanup, screen } from "@testing-library/react";
import { renderWithRouter } from "../../utils/test-utils";
import { MOCK_SESSION_LIST } from "../../utils/test-mock-data";
import { DashboardSessionList } from "../dashboard/DashboardSessionList";
import { DashboardSessionCard } from "../dashboard/DashboardSessionCard";

describe("Renders dashboard elements", () => {
  afterEach(() => {
    cleanup();
  });

  it("Should render session cards from collection", () => {
    renderWithRouter(<DashboardSessionList sessionList={MOCK_SESSION_LIST} />);

    const cardElements = screen.getAllByTestId("session-card");
    expect(cardElements.length).toBe(MOCK_SESSION_LIST.length);
  });

  it("Should render session card details", () => {
    const session = MOCK_SESSION_LIST[0];

    renderWithRouter(<DashboardSessionCard session={session} />);

    const titleElement = screen.getByText("test name");
    expect(titleElement).toBeInTheDocument();

    const descElement = screen.getByText("test desc");
    expect(descElement).toBeInTheDocument();

    const dateElement = screen.getByText("planned: 2024-01-01");
    expect(dateElement).toBeInTheDocument();
  });
});
