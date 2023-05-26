import { MilitaryTimeValidator } from "./";

describe("military time validator", () => {
  it.each([
    "01:12 - 14:32",
    "12:34 - 13:45",
    "22:00 - 23:12",
    "00:00 - 23:59",
    "13:34 - 08:45",
    "08:45 - 08:34",
  ])('knows that "%s" is a valid range', (range) => {
    expect(MilitaryTimeValidator.validateRange(range)).toBe(true);
  });

  it.each([
    "",
    "12:34",
    "12:34 - ",
    " - 01:23",
    "12:34 - 1345",
    "1234 - 13:45",
    "25:00 - 12:23",
    "12:23 - 25:00",
    "12:23 - 24:01",
    "00:00 - 24:00",
    "12:34 - 13:60",
    "12:61 - 13:23",
  ])('knows that "%s" is not a valid range', (range) => {
    expect(MilitaryTimeValidator.validateRange(range)).toBe(false);
  });
});
