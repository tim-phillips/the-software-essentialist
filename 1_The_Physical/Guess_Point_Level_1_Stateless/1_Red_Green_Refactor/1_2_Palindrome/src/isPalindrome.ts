export function isPalindrome(word: string): boolean {
  return (
    reverseWord(removeSpaces(word)).toLowerCase() ===
    removeSpaces(word).toLowerCase()
  );
}

function reverseWord(word: string): string {
  return word.split("").reverse().join("");
}

function removeSpaces(word: string): string {
  return word.replace(/ /g, "");
}
