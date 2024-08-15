import React from "react";

interface PropsInterface {
  blueProbability: number;
  redProbability: number;
  minInput: number; // Valor mínimo para o intervalo de entrada
  maxInput: number; // Valor máximo para o intervalo de entrada
}

export default function PreviewOutputNeuron({
  blueProbability,
  redProbability,
  minInput,
  maxInput,
}: PropsInterface) {
  console.log("blueProbability", blueProbability);
  console.log("redProbability", redProbability);
  console.log("minInput", minInput);
  console.log("maxInput", maxInput);
  // Função de mapeamento personalizada para mapear os valores para a faixa de 0 a 1
  const mapToScale = (value: number, min: number, max: number) => {
    // Mapeia o valor para a faixa de 0 a 1 com base em min e max
    return (value - min) / (max - min);
  };

  // Mapear as probabilidades para a escala especificada
  const mappedBlueProbability = mapToScale(blueProbability, minInput, maxInput);
  const mappedRedProbability = mapToScale(redProbability, minInput, maxInput);

  // Cria um estilo de cor de fundo com gradiente linear, ajustando a opacidade
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
