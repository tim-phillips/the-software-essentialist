import { statsCalculator } from "./";

describe(statsCalculator.name, () => {
  it.each([
    { min: -8, seq: [2, 4, 21, -8, 53, 40] },
    { min: 16, seq: [29, 184, 21, 16, 53, 40] },
  ])("knows that %i is the minimum value", ({ min, seq }) => {
    const response = statsCalculator(seq);
    expect(response.min).toBe(min);
  });

  it.each([
    { max: 53, seq: [2, 4, 21, -8, 53, 40] },
    { max: 184, seq: [29, 184, 21, 16, 53, 40] },
  ])("knows that %i is the maximum value", ({ max, seq }) => {
    const response = statsCalculator(seq);
    expect(response.max).toBe(max);
  });

  it.each([
    { elements: 6, seq: [29, 184, 21, 16, 53, 40] },
    { elements: 3, seq: [29, 184, 21] },
  ])("knows that there are %i elements", ({ elements, seq }) => {
    const response = statsCalculator(seq);
    expect(response.elements).toBe(elements);
  });

  it.each([
    { avg: 18.666666666667, seq: [2, 4, 21, -8, 53, 40] },
    { avg: -44.666666666667, seq: [29, -184, 21] },
  ])("knows that the average is 18.666666666667", () => {
    const seq = [2, 4, 21, -8, 53, 40];
    const response = statsCalculator(seq);
    expect(response.avg).toBe(18.666666666667);
  });
});
