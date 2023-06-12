export class BooleanCalculator {
  static evaluateExpression(expression: string): boolean {
    const tokens = expression.split(" ");
    const not = tokens[0] === "NOT";
    if (not) {
      const result = tokens[1] === "TRUE";
      return !result;
    } else {
      return expression === "TRUE";
    }
  }
}
