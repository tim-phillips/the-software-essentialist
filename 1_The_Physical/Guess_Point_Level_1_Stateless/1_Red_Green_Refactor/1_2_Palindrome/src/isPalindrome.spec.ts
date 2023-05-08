import { isPalindrome } from "./isPalindrome";

describe(isPalindrome.name, () => {
  it.each(["mom", "wow", "racecar", "Mom", "Was It A Rat I Saw"])(
    "knows that '%s' is a palindrome",
    (word) => {
      expect(isPalindrome(word)).toBeTruthy();
    }
  );

  it.each(["bill", "tomato"])("knows that '%s' is not a palindrome", (word) => {
    expect(isPalindrome(word)).toBeFalsy();
  });
});
