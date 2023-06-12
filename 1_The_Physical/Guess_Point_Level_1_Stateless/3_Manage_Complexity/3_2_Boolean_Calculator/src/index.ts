export class BooleanCalculator {
  static evaluateExpression(expression: string): boolean {
    const tokens = expression.split(" ");
    const parsed = tokens.map((t) => {
      switch (t) {
        case "TRUE":
          return true;
        case "FALSE":
          return false;
        case "NOT":
          return "!";
        case "AND":
          return "&&";
        default:
          return null;
      }
    });

    const bool = parsed.join(" ");
    return eval(bool);
  }
}
