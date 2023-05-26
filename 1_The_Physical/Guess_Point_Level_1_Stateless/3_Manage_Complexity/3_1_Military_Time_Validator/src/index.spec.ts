import { MilitaryTimeValidator } from "./";

describe("military time validator", () => {
  it('knows that "01:12 - 14:32" is a valid range', () => {
    const range = "01:12 - 14:32";
    const res = MilitaryTimeValidator.validateRange(range);
    expect(res).toBe(true);
  });

  it('knows that "12:34 - 13:45" is a valid range', () => {
    const range = "12:34 - 13:45";
    const res = MilitaryTimeValidator.validateRange(range);
    expect(res).toBe(true);
  });

  it('knows that "22:00 - 23:12" is a valid range', () => {
    const range = "22:00 - 23:12";
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
    "13:34 - 08:45",
    "08:45 - 08:34",
    "25:00 - 12:23",
  ])('knows that "%s" is not a valid range', (range) => {
    const res = MilitaryTimeValidator.validateRange(range);
    expect(res).toBe(false);
  });
});
