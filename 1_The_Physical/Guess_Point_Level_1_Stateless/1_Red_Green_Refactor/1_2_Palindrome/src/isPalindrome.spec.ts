import { isPalindrome } from "./isPalindrome";

describe(isPalindrome.name, () => {
  it("knows that 'mom' is a palindrome", () => {
    expect(isPalindrome("mom")).toBeTruthy();
  });
});
