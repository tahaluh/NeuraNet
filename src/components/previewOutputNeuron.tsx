import React from "react";

interface propsInterface {
  blueProbability: number;
  redProbability: number;
  minInput: number;
  maxInput: number;
}
export default function PreviewOutputNeuron({
  blueProbability,
  redProbability,
  minInput,
  maxInput,
}: propsInterface) {
  // Função de mapeamento personalizada para mapear os valores para uma escala desejada
  const mapToScale = (value: number) => {
    const normalizedValue = (value - minInput) / (maxInput - minInput);
    const mappedValue = 0 + normalizedValue * (1 - 0);
    return mappedValue;
  };

  // Mapear as probabilidades para a escala especificada
  const mappedBlueProbability = mapToScale(blueProbability);
  const mappedRedProbability = mapToScale(redProbability);

  const colorStyle = {
    background: `linear-gradient(to bottom, rgba(0, 0, 255, ${mappedBlueProbability}), rgba(255, 0, 0, ${mappedRedProbability}))`,
  };

  return (
    <div
      className="w-20 h-20 rounded-full m-auto transition-all duration-300"
      style={colorStyle}
    ></div>
  );
}
