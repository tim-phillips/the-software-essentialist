export function statsCalculator(seq: number[]) {
  const seqCopy = [...seq];

  seqCopy.sort((a, b) => a - b);

  return {
    min: seqCopy[0],
    max: seqCopy[seqCopy.length - 1],
  };
}
