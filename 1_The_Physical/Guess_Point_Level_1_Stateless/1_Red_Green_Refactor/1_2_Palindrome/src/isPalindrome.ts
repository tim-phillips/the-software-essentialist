export function isPalindrome(word: string): boolean {
  return (
    reverse(removeSpaces(word)).toLowerCase() ===
    removeSpaces(word).toLowerCase()
  );
}

function reverse(str: string): string {
  return str.split("").reverse().join("");
}

function removeSpaces(str: string): string {
  return str.replace(/ /g, "");
}
