export function isPalindrome(word: string): boolean {
  return (
    reverseWord(word.replace(/ /g, "")).toLowerCase() ===
    word.replace(/ /g, "").toLowerCase()
  );
}

function reverseWord(word: string): string {
  return word.split("").reverse().join("");
}
