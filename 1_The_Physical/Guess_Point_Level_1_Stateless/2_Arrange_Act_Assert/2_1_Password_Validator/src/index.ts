export function validatePassword(password: string) {
  let result = true;
  let errors: string[] = [];

  if (password.length < 5 || password.length > 15) {
    result = false;
    errors.push("InvalidLength");
  }

  if (!/[0-9]/.test(password)) {
    result = false;
    errors.push("MissingDigit");
  }

  return {
    result,
    errors,
  };
}
