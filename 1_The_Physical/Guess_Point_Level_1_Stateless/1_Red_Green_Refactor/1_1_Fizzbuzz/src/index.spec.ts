import { fizzbuzz } from "./fizzbuzz";

// Write a function that takes numbers from 1 to 100
// and outputs them as a string,
// but for multiples of three it returns “Fizz”
// and for multiples of five it returns “Buzz”
// For multiples of both three and five, it returns “FizzBuzz”

describe("FizzBuzz", () => {
  test("takes numbers from 1 to 100", () => {
    expect(() => fizzbuzz(-23)).toThrow();
    expect(() => fizzbuzz(-1)).toThrow();
    expect(() => fizzbuzz(0)).toThrow();
    expect(() => fizzbuzz(1)).not.toThrow();
    expect(() => fizzbuzz(11)).not.toThrow();
    expect(() => fizzbuzz(54)).not.toThrow();
    expect(() => fizzbuzz(87)).not.toThrow();
    expect(() => fizzbuzz(100)).not.toThrow();
    expect(() => fizzbuzz(101)).toThrow();
    expect(() => fizzbuzz(131)).toThrow();
  });

  test("outputs numbers as a string", () => {
    expect(fizzbuzz(1)).toBe("1");
    expect(fizzbuzz(11)).toBe("11");
    expect(fizzbuzz(54)).toBe("54");
    expect(fizzbuzz(87)).toBe("87");
    expect(fizzbuzz(100)).toBe("100");
  });
});
