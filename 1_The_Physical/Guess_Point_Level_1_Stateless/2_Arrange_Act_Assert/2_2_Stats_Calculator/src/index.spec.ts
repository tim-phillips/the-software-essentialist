import { statsCalculator } from "./";

describe(statsCalculator.name, () => {
  it("knows that -8 is the minimum value", () => {
    const seq = [2, 4, 21, -8, 53, 40];
    const response = statsCalculator(seq);
    expect(response.min).toBe(-8);
  });

  it("knows that 16 is the minimum value", () => {
    const seq = [29, 184, 21, 16, 53, 40];
    const response = statsCalculator(seq);
    expect(response.min).toBe(16);
  });
});
