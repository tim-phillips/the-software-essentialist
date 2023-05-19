export function statsCalculator(seq: number[]) {
  const seqCopy = [...seq];

  seqCopy.sort();

  return {
    min: seqCopy[0],
    max: 53,
  };
}
