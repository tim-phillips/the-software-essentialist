export function isPalindrome(word: string): boolean {
  return (
    reverse(lowerCase(removeSpaces(word))) === lowerCase(removeSpaces(word))
  );
}

function reverse(str: string): string {
  return str.split("").reverse().join("");
}

function removeSpaces(str: string): string {
  return str.replace(/ /g, "");
}

function lowerCase(str: string): string {
  return str.toLowerCase();
}
