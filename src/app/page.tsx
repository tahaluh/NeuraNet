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
      />
    </main>
  );
}
