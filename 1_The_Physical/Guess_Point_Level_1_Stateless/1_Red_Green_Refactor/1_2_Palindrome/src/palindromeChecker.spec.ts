import { palindromeChecker } from "./palindromeChecker";

describe("palindrome checker", () => {
  it("knows that 'mom' is a palindrome", () => {
    expect(palindromeChecker("mom")).toBeTruthy();
  });
});
