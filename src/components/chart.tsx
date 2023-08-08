"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";

interface propsInterface {
  width: number;
  height: number;
  dotSize?: number;
  lineSize?: number;
  centerAxis?: boolean;

  yAxisGrids?: number;
  xAxisGrids?: number;
}

const MyChart: React.FC<propsInterface> = ({
  width,
  height,
  dotSize = 6,
  lineSize = 1,
  centerAxis = false,

  yAxisGrids = 10,
  xAxisGrids = 10,
}) => {
  const chartRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // Função para criar e atualizar o gráfico
    const drawChart = () => {
      const data = [
        { x: -6, y: 0.0025 },
        { x: -5, y: 0.0067 },
        { x: -4, y: 0.0179 },
        { x: -3, y: 0.0474 },
        { x: -2, y: 0.1192 },
        { x: -1, y: 0.2689 },
        { x: 0, y: 0.5 },
        { x: 1, y: 0.7311 },
        { x: 2, y: 0.8808 },
        { x: 3, y: 0.9526 },
        { x: 4, y: 0.9821 },
        { x: 5, y: 0.9933 },
        { x: 6, y: 0.9975 },
      ];

      const svg = d3.select(chartRef.current);

      // Escala linear para os eixos X e Y
      const xMin = -6;
      const xMax = 6;
      const yMin = 0;
      const yMax = 1;

      const xScale = d3
        .scaleLinear()
        .domain([xMin, xMax])
        .range([
          width / (xAxisGrids * 2),
          (width / yAxisGrids) * (yAxisGrids - 1),
        ]);
      const yScale = d3
        .scaleLinear()
        .domain([yMin, yMax])
        .range([
          (height / xAxisGrids) * (xAxisGrids - 1),
          height / (yAxisGrids * 2),
        ]);
      console.log(xScale);

      // Criação do grid vertical
      const xAxis = d3
        .axisBottom(xScale)
        .ticks(xAxisGrids)
        .tickSize(height * 0.95)
        .tickFormat(() => "");
      const xAxisGroup = svg
        .append("g")
        .attr("class", "grid")
        .call(xAxis)
        .call((g) => g.select(".domain").remove())
        .call((g) => g.selectAll(".tick line").attr("stroke", "#342F34"))!;

      // Criação do grid horizontal
      const yAxis = d3
        .axisLeft(yScale)
        .ticks(yAxisGrids)
        .tickSize(-width * 0.95)
        .tickFormat(() => "");
      const yAxisGroup = svg
        .append("g")
        .attr("class", "grid")
        .call(yAxis)
        .call((g) => g.select(".domain").remove())
        .call((g) => g.selectAll(".tick line").attr("stroke", "#342F34"));

      // Seleciona a linha do meio no eixo x
      const xAxisLine = xAxisGroup.selectAll("line").nodes()[6]!;
      d3.select(xAxisLine).attr("stroke", "#4D4B4D").attr("stroke-width", 2); // Define a espessura da linha do meio; // Define a cor branca para a linha do meio

      // Seleciona a linha do meio no eixo y
      const yAxisLine = yAxisGroup.selectAll("line").nodes()[5];
      d3.select(yAxisLine).attr("stroke", "#4D4B4D").attr("stroke-width", 2); // Define a espessura da linha do meio; // Define a cor branca para a linha do meio

      // Criação da linha sigmoid
      const line = d3
        .line<{ x: number; y: number }>()
        .x((d) => xScale(d.x))
        .y((d) => yScale(d.y))
        .curve(d3.curveBasis);

      svg
        .append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "#FFFFFF")
        .attr("stroke-width", lineSize)
        .attr("d", line);

      // Criação dos pontos vermelhos
      svg
        .selectAll("circle.red")
        .data(data.filter((d) => d.y < 0.5))
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
        .data(data.filter((d) => d.y >= 0.5))
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

export default MyChart;
