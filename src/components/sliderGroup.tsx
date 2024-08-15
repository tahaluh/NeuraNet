"use client";

import { useState, ChangeEvent } from "react";
import Slider from "./slider";
import calculateOutputValues from "../utils/calculateOutputValues";
import PreviewOutputNeuron from "./previewOutputNeuron";
import calculateMinMaxOutput from "../utils/calculateMinMaxOutput";

interface LayeredSlidersProps {
  neuronCounts: number[];
}

export default function SliderGroup({ neuronCounts }: LayeredSlidersProps) {
  const [weightMatrix, setWeightMatrix] = useState<number[][][]>(
    initializeWeightMatrix(neuronCounts)
  );

  const [outputValues, setOutputValues] = useState<number[]>([]);

  const handleSliderChange = (
    event: ChangeEvent<HTMLInputElement>,
    layerIndex: number,
    neuronIndex: number,
    weightIndex: number
  ) => {
    const newValue = Number(event.target.value);
    setWeightMatrix((matrix) => {
      matrix[layerIndex][neuronIndex][weightIndex] = newValue;
      setOutputValues(calculateOutputValues(neuronCounts, matrix));
      return matrix;
    });
  };

  function initializeWeightMatrix(counts: number[]): number[][][] {
    const matrix: number[][][] = [];
    for (let i = 0; i < counts.length - 1; i++) {
      const layer: number[][] = [];
      for (let j = 0; j < counts[i]; j++) {
        const neuron: number[] = [];
        for (let k = 0; k < counts[i + 1]; k++) {
          neuron.push(0);
        }
        layer.push(neuron);
      }
      matrix.push(layer);
    }

    return matrix;
  }

  return (
    <div className="space-y-4 flex items-center justify-center">
      <div className="mt-4 w-9/12 space-y-4">
        {weightMatrix.map((layer, layerIndex) => (
          <div key={layerIndex}>
            {layer.map((neuron, neuronIndex) => (
              <div key={neuronIndex} className="mt-4">
                {neuron.map((weight, weightIndex) => (
                  <div key={weightIndex} className="flex items-center">
                    <Slider
                      value={weight}
                      onChange={(event) =>
                        handleSliderChange(
                          event,
                          layerIndex,
                          neuronIndex,
                          weightIndex
                        )
                      }
                      label={`weight${neuronIndex + 1},${weightIndex + 1}`}
                      min={-1}
                      max={1}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="w-1/12 p-10 flex justify-center ml-10">
        <div className="flex flex-col items-center">
          <PreviewOutputNeuron
            blueProbability={outputValues[0]}
            redProbability={outputValues[1]}
            minInput={-calculateMinMaxOutput(neuronCounts)}
            maxInput={calculateMinMaxOutput(neuronCounts)}
          />
          <label className="w-full text-white RobotoMono text-center pt-2">{`output`}</label>
        </div>
      </div>
    </div>
  );
}
