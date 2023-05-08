export function isPalindrome(word: string): boolean {
  return reverseWord(word).toLowerCase() === word.toLowerCase();
}

function reverseWord(word: string): string {
  return word.split("").reverse().join("");
}
