export default function calculateOutputValues(
  weights: number[][][]
): number[][] {
  const outputValues: number[][] = [];

  for (let layerIndex = 0; layerIndex < weights.length; layerIndex++) {
    const layerNeurons: number[] = [];
    for (
      let neuronIndex = 0;
      neuronIndex < weights[layerIndex].length;
      neuronIndex++
    ) {
      let neuronValue = 0;
      for (
        let weightIndex = 0;
        weightIndex < weights[layerIndex][neuronIndex].length;
        weightIndex++
      ) {
        neuronValue +=
          weights[layerIndex][neuronIndex][weightIndex] *
          (layerIndex > 0 ? outputValues[layerIndex - 1][neuronIndex] : 1); // calcula o valor do neuronio, usando como entrada o valor da camada anterior ou 1 para a primeira camada
      }
      layerNeurons.push(neuronValue);
    }
    outputValues.push(layerNeurons);
  }

  return outputValues;
}
