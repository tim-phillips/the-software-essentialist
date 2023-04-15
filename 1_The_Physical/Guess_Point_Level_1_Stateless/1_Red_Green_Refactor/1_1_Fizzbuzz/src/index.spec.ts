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
    expect(fizzbuzz(56)).toBe("56");
    expect(fizzbuzz(83)).toBe("83");
    expect(fizzbuzz(98)).toBe("98");
  });

  test("outputs 'Fizz' for multiples of three", () => {
    expect(fizzbuzz(3)).toBe("Fizz");
    expect(fizzbuzz(6)).toBe("Fizz");
    expect(fizzbuzz(12)).toBe("Fizz");
    expect(fizzbuzz(33)).toBe("Fizz");
    expect(fizzbuzz(99)).toBe("Fizz");
  });

  test("outputs 'Buzz' for multiples of five", () => {
    expect(fizzbuzz(5)).toBe("Buzz");
    expect(fizzbuzz(10)).toBe("Buzz");
    expect(fizzbuzz(35)).toBe("Buzz");
    expect(fizzbuzz(70)).toBe("Buzz");
    expect(fizzbuzz(100)).toBe("Buzz");
  });

  test("outputs 'FizzBuzz' for multiples of both three and five", () => {
    expect(fizzbuzz(15)).toBe("FizzBuzz");
    expect(fizzbuzz(30)).toBe("FizzBuzz");
    expect(fizzbuzz(45)).toBe("FizzBuzz");
    expect(fizzbuzz(75)).toBe("FizzBuzz");
    expect(fizzbuzz(90)).toBe("FizzBuzz");
  });
});
