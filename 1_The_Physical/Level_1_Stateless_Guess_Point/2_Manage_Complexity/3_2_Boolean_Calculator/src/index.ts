const operators = ["TRUE", "FALSE", "NOT", "AND", "OR", "(", ")"];

export class BooleanCalculator {
  static evaluateExpression(expression: string): boolean {
    const tokens = expression
      .split(/( |\(|\))/g)
      .filter((t) => t.trim() !== "");

    if (!tokens.every((t) => operators.includes(t))) {
      throw new Error(`Only use allowed words: ${operators.join(", ")}`);
    }

    const parsed = tokens.map((t) => {
      switch (t) {
        case "TRUE":
        case "FALSE":
          return t.toLowerCase();
        case "NOT":
          return "!";
        case "AND":
          return "&&";
        case "OR":
          return "||";
        case "(":
        case ")":
          return t;
        default:
          return null;
      }
    });

    return eval(parsed.join(""));
  }
}
