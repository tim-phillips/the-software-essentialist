import { MilitaryTimeValidator } from "./";

describe("military time validator", () => {
  it('knows that "01:12 - 14:32" is a valid range', () => {
    const range = "01:12 - 14:32";
    const res = MilitaryTimeValidator.validateRange(range);
    expect(res).toBe(true);
  });

  it.each([
    "",
    "12:34",
    "12:34 - ",
    " - 01:23",
    "12:34 - 1345",
    "1234 - 13:45",
  ])('knows that "%s" is not a valid range', (range) => {
    const res = MilitaryTimeValidator.validateRange(range);
    expect(res).toBe(false);
  });
});
