import { statsCalculator } from "./";

describe(statsCalculator.name, () => {
  it.each([
    {
      seq: [2, 4, 21, -8, 53, 40],
      min: -8,
      max: 53,
      elements: 6,
      avg: 18.666666666667,
    },
    {
      seq: [29, 184, 21, 16, 53, 40],
      min: 16,
      max: 184,
      elements: 6,
      avg: 57.166666666667,
    },
    {
      seq: [29, 184, 21],
      min: 21,
      max: 184,
      elements: 3,
      avg: 78,
    },
    {
      seq: [29, -184, 21],
      min: -184,
      max: 29,
      elements: 3,
      avg: -44.666666666667,
    },
  ])(
    "knows that min: $min, max: $max, elements: $elements, avg: $avg",
    ({ seq, min, max, elements, avg }) => {
      const response = statsCalculator(seq);
      expect(response.min).toBe(min);
      expect(response.max).toBe(max);
      expect(response.elements).toBe(elements);
      expect(response.avg).toBe(avg);
    }
  );
});
