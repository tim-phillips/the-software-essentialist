export function fizzbuzz(n: number) {
  if (n < 1 || n > 100) {
    throw Error("Must use a number between 1 and 100");
  }
}
