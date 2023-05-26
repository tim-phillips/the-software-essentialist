import { MilitaryTimeValidator } from "./";

describe("military time validator", () => {
  it('knows that "01:12 - 14:32" is a valid range', () => {
    const range = "01:12 - 14:32";
    const militaryTimeValidator = new MilitaryTimeValidator();

    const res = militaryTimeValidator.validateRange(range);

    expect(res).toBe(true);
  });

  it("knows that an empty string is not a valid range", () => {
    const range = "";
    const militaryTimeValidator = new MilitaryTimeValidator();

    const res = militaryTimeValidator.validateRange(range);

    expect(res).toBe(false);
  });
});
