export default function calculateMinMaxOutput(neuronCounts: number[]): number {
  // sum all the neurons except the last one
  return neuronCounts.reduce((acc, curr, index) => {
    if (index === neuronCounts.length - 1) {
      return acc;
    }
    return acc * curr;
  });
}
