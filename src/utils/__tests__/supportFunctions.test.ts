import { it, expect, describe } from "vitest";
import { applyDate } from "../supportFunctions/dateHandlers";
import { User } from "../../types/types";
import { MOCK_SESSION_LIST } from "../../test-utils/test-mock-data";
import { checkUserSessionOwnership } from "../supportFunctions/userHandlers";

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

  it("Returns correct boolean value if user has session included in session list", () => {
    const user: User = {
      id: 1,
      roles: [],
      email: "test@test.com",
      sessions: MOCK_SESSION_LIST,
    };
    const trueID: number = 999;
    const falseID: number = 1;

    const resultTrue = checkUserSessionOwnership(user, trueID);
    expect(resultTrue).toBe(true);

    const resultFalse = checkUserSessionOwnership(user, falseID);
    expect(resultFalse).toBe(false);
  });
});
