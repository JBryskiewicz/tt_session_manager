import { it, expect, describe } from "vitest";
import { applyDate } from "../supportFunctions/dateHandlers";

describe("Tests for support funtions", () => {
  it("Function returns correctly formated date", () => {
    const date: string = applyDate(new Date().toISOString());
    const regex: RegExp = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
    expect(date).toMatch(regex);
  });

  it("Function returns correct value if argument is null", () => {
    const date: string = applyDate(null);
    expect(date).toBe("Session is not planned");
  });
});
