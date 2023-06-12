import { BooleanCalculator } from "./";

describe(BooleanCalculator.name, () => {
  it.each(["TRUE", "NOT FALSE", "TRUE AND TRUE", "TRUE OR FALSE"])(
    "'%s' is `true`",
    (expression) => {
      expect(BooleanCalculator.evaluateExpression(expression)).toEqual(true);
    }
  );

  it.each(["FALSE", "NOT TRUE", "TRUE AND FALSE"])(
    "'%s' is `false`",
    (expression) => {
      expect(BooleanCalculator.evaluateExpression(expression)).toEqual(false);
    }
  );

  it.each(["TRUE IS NOT FALSE"])("'%s' throws an error", (expression) => {
    expect(() => BooleanCalculator.evaluateExpression(expression)).toThrow();
  });
});
