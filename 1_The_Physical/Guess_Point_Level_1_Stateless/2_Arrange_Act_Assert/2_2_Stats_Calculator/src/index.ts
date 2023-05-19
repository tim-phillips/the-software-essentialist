export function statsCalculator(seq: number[]) {
  const seqCopy = [...seq];

  seqCopy.sort((a, b) => a - b);

  return {
    min: seqCopy[0],
    max: seqCopy[seqCopy.length - 1],
    elements: seqCopy.length,
    avg: parseFloat((sum(seqCopy) / seqCopy.length).toFixed(12)),
  };
}

function sum(nums: number[]): number {
  return nums.reduce((sum, num) => {
    return sum + num;
  });
}
