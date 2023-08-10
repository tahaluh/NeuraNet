import Image from "next/image";
import NeuraChart from "../components/neuraChart";

export default function Home() {
  return (
    <main className="flex flex-row flex-wrap items-start justify-center h-screen">
      {/* Título Centralizado */}
      <h1 className="text-3xl font-bold mb-2 mt-8 w-screen text-center Montserrat">
        1. Decision Boundary (Fronteira de decisão)
      </h1>

      {/* Layout Desktop */}
      <div className="flex flex-row items-start justify-around space-x-4">
        {/* Chart na Esquerda */}
        <div className="">
          <NeuraChart
            height={400}
            width={550}
            xAxisGrids={14}
            yAxisGrids={10}
            centerAxis={false}
          />
        </div>

        {/* Bloco de Texto à Direita */}
        <div className="w-2/6">
          <p className="text-md RobotoMono mb-4 ml-2">
            O "Decision Boundary" (Fronteira de Decisão) é um conceito crucial
            em redes neurais. Ele representa uma linha ou limite que separa
            diferentes grupos de dados em um gráfico.
          </p>
          <p className="text-lg RobotoMono mb-4 ml-2">
            Por exemplo, no gráfico com pontos{" "}
            <span className="NeuraBlue">azuis</span> e{" "}
            <span className="NeuraRed">vermelhos</span>, o "Decision Boundary" é
            a linha branca que divide esses pontos em grupos.
          </p>
          <p className="text-lg RobotoMono ml-2">
            Essa fronteira é essencial para que o modelo de rede neural possa
            fazer decisões precisas e classificar corretamente os pontos de
            dados em suas respectivas categorias.
          </p>
        </div>
      </div>
    </main>
  );
}
