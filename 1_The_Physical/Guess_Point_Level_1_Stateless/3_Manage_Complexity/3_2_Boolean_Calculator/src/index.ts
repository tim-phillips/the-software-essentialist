const operators = ["TRUE", "FALSE", "NOT", "AND", "OR"];

export class BooleanCalculator {
  static evaluateExpression(expression: string): boolean {
    const tokens = expression.split(" ");

    if (!tokens.every((t) => operators.includes(t))) {
      throw new Error(`Only use allowed words: ${operators.join(", ")}`);
    }

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
        case "OR":
          return "||";
        default:
          return null;
      }
    });

    return eval(parsed.join(""));
  }
}
