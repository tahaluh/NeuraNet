import Image from "next/image";
import Chart from "../components/chart";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen text-red-500">
      <Chart
        height={500}
        width={500}
        xAxisGrids={10}
        yAxisGrids={10}
        blueStrokeData={[
          { x: -6, y: 0.0025 },
          { x: -5, y: 0.0067 },
          { x: -4, y: 0.0179 },
          { x: -3, y: 0.0474 },
          { x: -2, y: 0.1192 },
          { x: -1, y: 0.2689 },
        ]}
        redStrokeData={[
          { x: 0, y: 0.5 },
          { x: 1, y: 0.7311 },
          { x: 2, y: 0.8808 },
          { x: 3, y: 0.9526 },
          { x: 4, y: 0.9821 },
          { x: 5, y: 0.9933 },
          { x: 6, y: 0.9975 },
        ]}
        lineStrokeData={[
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
        ]}
      />
    </main>
  );
}
