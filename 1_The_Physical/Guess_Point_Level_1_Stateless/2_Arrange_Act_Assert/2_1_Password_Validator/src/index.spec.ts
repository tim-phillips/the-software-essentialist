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
    expect(response.errors).toContain("InvalidLength");
  });

  it("returns error for long password containing a digit and an upper case letter", () => {
    const response = validatePassword("suchl3ngthsuchwoW");

    expect(response.result).toEqual(false);
    expect(response.errors.length).toEqual(1);
    expect(response.errors).toContain("InvalidLength");
  });

  it("returns error for password between 5 and 15 characters with an upper case letter without a digit", () => {
    const response = validatePassword("apassNodigit");

    expect(response.result).toEqual(false);
    expect(response.errors.length).toEqual(1);
    expect(response.errors).toContain("MissingDigit");
  });

  it("returns error for password between 5 and 15 characters with a digit without an upper case letter", () => {
    const response = validatePassword("apassn0upper");

    expect(response.result).toEqual(false);
    expect(response.errors.length).toEqual(1);
    expect(response.errors).toContain("MissingUppercase");
  });

  it("returns errors for password between 5 and 15 characters without a digit or an upper case letter", () => {
    const response = validatePassword("apass");

    expect(response.result).toEqual(false);
    expect(response.errors.length).toEqual(2);
    expect(response.errors).toContain("MissingDigit");
    expect(response.errors).toContain("MissingUppercase");
  });

  it("returns errors for short password with a digit without an upper case letter", () => {
    const response = validatePassword("t1ny");

    expect(response.result).toEqual(false);
    expect(response.errors.length).toEqual(2);
    expect(response.errors).toContain("InvalidLength");
    expect(response.errors).toContain("MissingUppercase");
  });

  it("returns errors for long password with a digit without an upper case letter", () => {
    const response = validatePassword("suchl3ngthsuchwow");

    expect(response.result).toEqual(false);
    expect(response.errors.length).toEqual(2);
    expect(response.errors).toContain("InvalidLength");
    expect(response.errors).toContain("MissingUppercase");
  });

  it("returns errors for long password with an upper case letter without a digit", () => {
    const response = validatePassword("suchlEngthsuchwow");

    expect(response.result).toEqual(false);
    expect(response.errors.length).toEqual(2);
    expect(response.errors).toContain("InvalidLength");
    expect(response.errors).toContain("MissingDigit");
  });

  it("returns errors for long password without a digit or an upper case letter", () => {
    const response = validatePassword("suchlengthsuchwow");

    expect(response.result).toEqual(false);
    expect(response.errors.length).toEqual(3);
    expect(response.errors).toContain("InvalidLength");
    expect(response.errors).toContain("MissingUppercase");
    expect(response.errors).toContain("MissingDigit");
  });
});
