export function validatePassword(password: string) {
  return {
    result: false,
    errors: ["InvalidLength"],
  };
}
