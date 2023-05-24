import { statsCalculator } from "./";

describe(statsCalculator.name, () => {
  it.each([
    [-8, [2, 4, 21, -8, 53, 40]],
    [16, [29, 184, 21, 16, 53, 40]],
  ])("knows that %i is the minimum value", (min, seq) => {
    const response = statsCalculator(seq);
    expect(response.min).toBe(min);
  });

  it.each([
    [53, [2, 4, 21, -8, 53, 40]],
    [184, [29, 184, 21, 16, 53, 40]],
  ])("knows that %i is the maximum value", (max, seq) => {
    const response = statsCalculator(seq);
    expect(response.max).toBe(max);
  });

  it.each([
    [6, [29, 184, 21, 16, 53, 40]],
    [3, [29, 184, 21]],
  ])("knows that there are %i elements", (elements, seq) => {
    const response = statsCalculator(seq);
    expect(response.elements).toBe(elements);
  });

  it.each([
    [18.666666666667, [2, 4, 21, -8, 53, 40]],
    [-44.666666666667, [29, -184, 21]],
  ])("knows that the average is 18.666666666667", () => {
    const seq = [2, 4, 21, -8, 53, 40];
    const response = statsCalculator(seq);
    expect(response.avg).toBe(18.666666666667);
  });
});
