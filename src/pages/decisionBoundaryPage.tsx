import NeuraChart from "../components/neuraChart";
import generatePointsByLine from "../utils/generatePointsByLine";
import FormattedParagraphs from "@/src/components/formattedParagraphs";
import { Locale } from "../types/types";
import PreviousButton from "../components/previousButton";
import NextButton from "../components/nextButton";

interface propsInterface {
  locale: Locale;
}
export default function DecisionBoundaryPage({ locale }: propsInterface) {
  const { pointsLeft, pointsRight } = generatePointsByLine(
    80,
    { x: 0, y: 10 },
    { x: 7, y: 0 },
    0.4,
    0.5
  );

  const topic = "decisionBoundary";

  return (
    <main className="flex flex-row flex-wrap items-start justify-center h-screen">
      {/* Título Centralizado */}
      <h1 className="text-3xl font-bold mb-2 mt-8 w-screen text-center Montserrat">
        {locale[topic].title}
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
            blueStrokeData={pointsLeft}
            redStrokeData={pointsRight}
            lineStrokeData={[
              { x: 0, y: 10 },
              { x: 7, y: 0 },
            ]}
            dotSize={8}
          />
        </div>

        {/* Bloco de Texto à Direita */}
        <div className="w-2/6">
          <FormattedParagraphs texts={locale[topic].content.page1} />
          <div className="w-full flex flex-row items-start justify-between">
            <PreviousButton
              text={"Voltar"}
              topic={topic}
              lang={locale.utils.lang}
            />
            <NextButton
              text={"Continuar"}
              topic={topic}
              lang={locale.utils.lang}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
