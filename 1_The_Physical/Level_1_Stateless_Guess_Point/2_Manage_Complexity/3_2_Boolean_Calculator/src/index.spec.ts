import { BooleanCalculator } from "./";

describe(BooleanCalculator.name, () => {
  it.each([
    "TRUE",
    "NOT FALSE",
    "TRUE AND TRUE",
    "TRUE OR FALSE",
    "TRUE OR TRUE OR TRUE AND FALSE",
    "TRUE OR FALSE AND NOT FALSE",
  ])("'%s' is `true`", (expression) => {
    expect(BooleanCalculator.evaluateExpression(expression)).toEqual(true);
  });

  it.each([
    "FALSE",
    "NOT TRUE",
    "TRUE AND FALSE",
    "FALSE OR FALSE",
    "(TRUE OR TRUE OR TRUE) AND FALSE",
    "NOT (TRUE AND TRUE)",
  ])("'%s' is `false`", (expression) => {
    expect(BooleanCalculator.evaluateExpression(expression)).toEqual(false);
  });

  it.each(["TRUE IS NOT FALSE"])("'%s' throws an error", (expression) => {
    expect(() => BooleanCalculator.evaluateExpression(expression)).toThrow();
  });
});
