/**
 * Takes numbers from 1 to 100 and outputs them as a string
 * For multiples of three it returns "Fizz"
 * For multiples of five it returns "Buzz"
 * For multiples of both three and five it returns "FizzBuzz"
 */
export function fizzbuzz(n: number) {
  if (n < 1 || n > 100) {
    throw Error("Must use a number between 1 and 100");
  }

  if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";

  return n.toString();
}
