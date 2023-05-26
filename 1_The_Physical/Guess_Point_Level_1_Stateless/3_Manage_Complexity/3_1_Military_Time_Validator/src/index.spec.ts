import { MilitaryTimeValidator } from "./";

describe("military time validator", () => {
  it.each(["01:12 - 14:32", "12:34 - 13:45", "22:00 - 23:12"])(
    'knows that "%s" is a valid range',
    (range) => {
      const res = MilitaryTimeValidator.validateRange(range);
      expect(res).toBe(true);
    }
  );

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
