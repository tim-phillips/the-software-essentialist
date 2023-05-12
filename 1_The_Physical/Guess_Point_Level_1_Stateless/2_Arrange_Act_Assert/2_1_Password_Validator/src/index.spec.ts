import { validatePassword } from "./";

describe(validatePassword.name, () => {
  it("returns error for short password", () => {
    const response = validatePassword("tiny");

    expect(response.result).toEqual(false);
    expect(response.errors.length).toEqual(1);
    expect(response.errors[0]).toEqual("InvalidLength");
  });
});
