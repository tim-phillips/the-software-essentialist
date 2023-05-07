export function isPalindrome(word: string): boolean {
  return word.split("").reverse().join("") === word;
}
