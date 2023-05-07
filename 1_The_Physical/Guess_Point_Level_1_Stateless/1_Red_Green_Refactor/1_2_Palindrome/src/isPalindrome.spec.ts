import { isPalindrome } from "./isPalindrome";

describe(isPalindrome.name, () => {
  it("knows that 'mom' is a palindrome", () => {
    expect(isPalindrome("mom")).toBeTruthy();
  });

  it("knows that 'bill' is not a palindrome", () => {
    expect(isPalindrome("bill")).toBeFalsy();
  });
});
