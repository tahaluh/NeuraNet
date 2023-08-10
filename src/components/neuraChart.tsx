"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";
import generateIntermediatePoints from "../utils/generateIntermediatePoints";

interface propsInterface {
  width: number;
  height: number;
  dotSize?: number;
  lineSize?: number;
  centerAxis?: boolean;

  yAxisGrids?: number;
  xAxisGrids?: number;

  xRange?: number;
  yRange?: number;

  blueStrokeData?: Coordinates[];
  redStrokeData?: Coordinates[];
  lineStrokeData?: Coordinates[];
}

const NeuraChart: React.FC<propsInterface> = ({
  width,
  height,
  dotSize = 6,
  lineSize = 1,
  centerAxis = true,

  yAxisGrids = 10,
  xAxisGrids = 10,

  xRange = 10,
  yRange = 10,

  blueStrokeData = [],
  redStrokeData = [],
  lineStrokeData = [],
}) => {
  const chartRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // Função para criar e atualizar o gráfico
    const drawChart = () => {
      const svg = d3.select(chartRef.current);

      // Escala linear para os eixos X e Y
      const xMin = centerAxis ? -xRange : 0;
      const xMax = xRange;
      const yMin = centerAxis ? -yRange : 0;
      const yMax = yRange;

      const xScale = d3
        .scaleLinear()
        .domain([xMin, xMax])
        .range([
          width / (xAxisGrids + 1) / 2,
          width - width / (xAxisGrids + 1) / 2,
        ]);

      const yScale = d3
        .scaleLinear()
        .domain([yMin, yMax])
        .range([
          (height / xAxisGrids) * (xAxisGrids - 0.66),
          height / xAxisGrids / 1.5,
        ]);

      // Criação do grid vertical
      const customXTicks = generateIntermediatePoints(xMin, xMax, xAxisGrids);
      const xAxis = d3
        .axisBottom(xScale)
        .tickValues(customXTicks)
        .tickSize(height)
        .tickFormat(() => "");
      const xAxisGroup = svg
        .append("g")
        .attr("class", "grid")
        .call(xAxis)
        .call((g) => g.select(".domain").remove())
        .call((g) => g.selectAll(".tick line").attr("stroke", "#342F34"))!;

      // Criação do grid horizontal

      const customYTicks = generateIntermediatePoints(yMin, yMax, yAxisGrids);
      const yAxis = d3
        .axisLeft(yScale)
        .tickValues(customYTicks)
        .tickSize(-width)
        .tickFormat(() => "");
      const yAxisGroup = svg
        .append("g")
        .attr("class", "grid")
        .call(yAxis)
        .call((g) => g.select(".domain").remove())
        .call((g) => g.selectAll(".tick line").attr("stroke", "#342F34"));

      // Seleciona a linha do meio no eixo x
      const xAxisLine = xAxisGroup.selectAll("line").nodes()[
        centerAxis ? (xAxisGroup.selectAll("line").nodes().length - 1) / 2 : 0
      ]!;
      d3.select(xAxisLine).attr("stroke", "#4D4B4D").attr("stroke-width", 2); // Define a espessura da linha do meio; // Define a cor branca para a linha do meio

      // Seleciona a linha do meio no eixo y
      const yAxisLine = yAxisGroup.selectAll("line").nodes()[
        centerAxis ? (yAxisGroup.selectAll("line").nodes().length - 1) / 2 : 0
      ];
      d3.select(yAxisLine).attr("stroke", "#4D4B4D").attr("stroke-width", 2); // Define a espessura da linha do meio; // Define a cor branca para a linha do meio

      // Criação da linha
      const line = d3
        .line<{ x: number; y: number }>()
        .x((d) => xScale(d.x))
        .y((d) => yScale(d.y))
        .curve(d3.curveBasis);

      svg
        .append("path")
        .datum(lineStrokeData)
        .attr("fill", "none")
        .attr("stroke", "#FFFFFF")
        .attr("stroke-width", lineSize)
        .attr("d", line);

      // Criação dos pontos vermelhos
      svg
        .selectAll("circle.red")
        .data(redStrokeData)
        .enter()
        .append("circle")
        .attr("class", "red")
        .attr("cx", (d) => xScale(d.x))
        .attr("cy", (d) => yScale(d.y))
        .attr("r", dotSize)
        .attr("fill", "#FE4E5A");

      // Criação dos pontos azuis
      svg
        .selectAll("circle.blue")
        .data(blueStrokeData)
        .enter()
        .append("circle")
        .attr("class", "blue")
        .attr("cx", (d) => xScale(d.x))
        .attr("cy", (d) => yScale(d.y))
        .attr("r", dotSize)
        .attr("fill", "#5CAFFD");
    };

    drawChart();
  }, []);

  return <svg ref={chartRef} width={width} height={height} />;
};

export default NeuraChart;
