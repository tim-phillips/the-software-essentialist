export function statsCalculator(seq: number[]) {
  const seqCopy = [...seq];

  seqCopy.sort((a, b) => a - b);

  return {
    min: seqCopy[0],
    max: seqCopy[seqCopy.length - 1],
    elements: seqCopy.length,
    avg: average(seqCopy),
  };
}

function sum(nums: number[]): number {
  return nums.reduce((sum, num) => {
    return sum + num;
  });
}

function average(nums: number[]): number {
  return parseFloat((sum(nums) / nums.length).toFixed(12));
}
