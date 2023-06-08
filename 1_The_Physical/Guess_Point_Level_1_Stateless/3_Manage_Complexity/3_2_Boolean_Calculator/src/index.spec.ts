import { BooleanCalculator } from "./";

describe(BooleanCalculator.name, () => {
  it("'TRUE' is `true`", () => {
    const booleanCalculator = new BooleanCalculator();
    const expression = "TRUE";
    const expected = true;

    const result = booleanCalculator.evaluateExpression(expression);

    expect(result).toEqual(expected);
  });

  it("'FALSE' is `false`", () => {
    const booleanCalculator = new BooleanCalculator();
    const expression = "FALSE";
    const expected = false;

    const result = booleanCalculator.evaluateExpression(expression);

    expect(result).toEqual(expected);
  });

  it("'NOT TRUE' is `false`", () => {
    const booleanCalculator = new BooleanCalculator();
    const expression = "NOT TRUE";
    const expected = false;

    const result = booleanCalculator.evaluateExpression(expression);

    expect(result).toEqual(expected);
  });
});
