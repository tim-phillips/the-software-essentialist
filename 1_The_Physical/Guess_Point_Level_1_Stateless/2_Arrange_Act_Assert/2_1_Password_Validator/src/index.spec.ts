import { validatePassword } from "./";

describe(validatePassword.name, () => {
  it("returns true for password between 5 and 15 characters", () => {
    const response = validatePassword("agoodpassw0rd");

    expect(response.result).toEqual(true);
    expect(response.errors.length).toEqual(0);
  });

  it("returns error for short password", () => {
    const response = validatePassword("t1ny");

    expect(response.result).toEqual(false);
    expect(response.errors.length).toEqual(1);
    expect(response.errors[0]).toEqual("InvalidLength");
  });

  it("returns error for long password", () => {
    const response = validatePassword("suchl3ngthsuchwow");

    expect(response.result).toEqual(false);
    expect(response.errors.length).toEqual(1);
    expect(response.errors[0]).toEqual("InvalidLength");
  });

  it("returns error for password without a digit", () => {
    const response = validatePassword("apassnodigit");

    expect(response.result).toEqual(false);
    expect(response.errors.length).toEqual(1);
    expect(response.errors[0]).toEqual("MissingDigit");
  });
});
