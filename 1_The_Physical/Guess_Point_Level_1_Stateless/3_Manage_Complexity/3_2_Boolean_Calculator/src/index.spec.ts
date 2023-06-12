import { BooleanCalculator } from "./";

describe(BooleanCalculator.name, () => {
  it.each(["TRUE", "NOT FALSE", "TRUE AND TRUE"])(
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
});
