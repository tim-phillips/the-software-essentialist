import { validatePassword } from "./";

describe(validatePassword.name, () => {
  it.each(["agoodPassw0rd", "aPasswiThD1g1t", "secR3t"])(
    "validates '%s' is a valid password",
    (password) => {
      const response = validatePassword(password);
      expect(response.result).toEqual(true);
      expect(response.errors.length).toEqual(0);
    }
  );

  it.each([
    ["t1Ny", ["InvalidLength"]],
    ["suchl3ngthsuchwoW", ["InvalidLength"]],
    ["apassNodigit", ["MissingDigit"]],
    ["apassn0upper", ["MissingUppercase"]],
    ["apass", ["MissingDigit", "MissingUppercase"]],
    ["t1ny", ["InvalidLength", "MissingUppercase"]],
    ["t1ny", ["InvalidLength", "MissingUppercase"]],
    ["suchl3ngthsuchwow", ["InvalidLength", "MissingUppercase"]],
    ["suchlEngthsuchwow", ["InvalidLength", "MissingDigit"]],
    [
      "suchlengthsuchwow",
      ["InvalidLength", "MissingUppercase", "MissingDigit"],
    ],
  ])("returns error for '%s'", (password, errors) => {
    const response = validatePassword(password);
    expect(response.result).toEqual(false);
    expect(response.errors.length).toEqual(errors.length);
    for (const error of errors) {
      expect(response.errors).toContain(error);
    }
  });
});
