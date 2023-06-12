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
          return true;
        case "FALSE":
          return false;
        case "NOT":
          return "!";
        case "AND":
          return "&&";
        case "OR":
          return "||";
        case "(":
          return "(";
        case ")":
          return ")";
        default:
          return null;
      }
    });

    return eval(parsed.join(""));
  }
}
