export function fizzbuzz(n: number) {
  if (n < 1 || n > 100) {
    throw Error("Must use a number between 1 and 100");
  }

  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";

  return n.toString();
}
