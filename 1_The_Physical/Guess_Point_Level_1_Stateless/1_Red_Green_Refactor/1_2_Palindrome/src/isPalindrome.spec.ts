import { isPalindrome } from "./isPalindrome";

describe(isPalindrome.name, () => {
  it.each(["mom", "wow", "racecar"])(
    "knows that '%s' is a palindrome",
    (word) => {
      expect(isPalindrome(word)).toBeTruthy();
    }
  );

  it("knows that 'bill' is not a palindrome", () => {
    expect(isPalindrome("bill")).toBeFalsy();
  });
});
