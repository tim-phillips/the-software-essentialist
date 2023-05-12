import { validatePassword } from "./";

describe(validatePassword.name, () => {
  it("returns true for password between 5 and 15 characters, containing a digit and an upper case letter", () => {
    const response = validatePassword("agoodPassw0rd");

    expect(response.result).toEqual(true);
    expect(response.errors.length).toEqual(0);
  });

  it("returns error for short password containing a digit and an upper case letter", () => {
    const response = validatePassword("t1Ny");

    expect(response.result).toEqual(false);
    expect(response.errors.length).toEqual(1);
    expect(response.errors[0]).toEqual("InvalidLength");
  });

  it("returns error for long password containing a digit and an upper case letter", () => {
    const response = validatePassword("suchl3ngthsuchwoW");

    expect(response.result).toEqual(false);
    expect(response.errors.length).toEqual(1);
    expect(response.errors[0]).toEqual("InvalidLength");
  });

  it("returns error for password between 5 and 15 characters with an upper case letter without a digit", () => {
    const response = validatePassword("apassNodigit");

    expect(response.result).toEqual(false);
    expect(response.errors.length).toEqual(1);
    expect(response.errors[0]).toEqual("MissingDigit");
  });

  it("returns error for password between 5 and 15 characters with a digit without an upper case letter", () => {
    const response = validatePassword("apassn0upper");

    expect(response.result).toEqual(false);
    expect(response.errors.length).toEqual(1);
    expect(response.errors[0]).toEqual("MissingUppercase");
  });
});
