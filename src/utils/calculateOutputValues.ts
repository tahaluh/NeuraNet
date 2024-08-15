export default function calculateOutputValues(
  neuronCounts: number[],
  weights: number[][][]
): number[] {
  const net: number[][] = neuronCounts.map((count, index) =>
    Array(count).fill(index === 0 ? 1 : 0)
  );

  for (let i = 0; i < weights.length; i++) {
    for (let j = 0; j < weights[i].length; j++) {
      for (let k = 0; k < weights[i][j].length; k++) {
        net[i + 1][k] += net[i][j] * weights[i][j][k];
      }
    }
  }

  console.log(net);

  return net[net.length - 1];
}
