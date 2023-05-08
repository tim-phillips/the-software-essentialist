export function isPalindrome(word: string): boolean {
  return word.split("").reverse().join("").toLowerCase() === word.toLowerCase();
}
