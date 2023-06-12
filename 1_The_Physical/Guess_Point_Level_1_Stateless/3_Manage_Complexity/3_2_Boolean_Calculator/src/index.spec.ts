import { BooleanCalculator } from "./";

describe(BooleanCalculator.name, () => {
  it("'TRUE' is `true`", () => {
    const expression = "TRUE";
    const expected = true;

    const result = BooleanCalculator.evaluateExpression(expression);

    expect(result).toEqual(expected);
  });

  it("'FALSE' is `false`", () => {
    const expression = "FALSE";
    const expected = false;

    const result = BooleanCalculator.evaluateExpression(expression);

    expect(result).toEqual(expected);
  });

  it("'NOT TRUE' is `false`", () => {
    const expression = "NOT TRUE";
    const expected = false;

    const result = BooleanCalculator.evaluateExpression(expression);

    expect(result).toEqual(expected);
  });

  it("'NOT FALSE' is `true`", () => {
    const expression = "NOT FALSE";
    const expected = true;

    const result = BooleanCalculator.evaluateExpression(expression);

    expect(result).toEqual(expected);
  });

  it("'TRUE AND FALSE' is `false`", () => {
    const expression = "TRUE AND FALSE";
    const expected = false;

    const result = BooleanCalculator.evaluateExpression(expression);

    expect(result).toEqual(expected);
  });
});
