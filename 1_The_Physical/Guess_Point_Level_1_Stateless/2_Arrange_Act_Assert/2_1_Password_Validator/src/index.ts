export function validatePassword(password: string) {
  if (password.length < 5 || password.length > 15) {
    return {
      result: false,
      errors: ["InvalidLength"],
    };
  }

  return {
    result: true,
    errors: [],
  };
}
