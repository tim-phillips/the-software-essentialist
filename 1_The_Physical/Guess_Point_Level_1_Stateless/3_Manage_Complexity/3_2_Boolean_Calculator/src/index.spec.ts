import { BooleanCalculator } from "./";

describe(BooleanCalculator.name, () => {
  it("'TRUE' is `true`", () => {
    const booleanCalculator = new BooleanCalculator();
    const expression = "TRUE";
    const expected = true;

    const result = booleanCalculator.evaluateExpression(expression);

    expect(result).toEqual(expected);
  });
});
