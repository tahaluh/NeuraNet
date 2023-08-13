import Image from "next/image";
import InOutNeurons from "../../public/InOutNeurons.svg";

import generatePointsByLine from "../utils/generatePointsByLine";
import FormattedParagraphs from "@/src/components/formattedParagraphs";
import { Locale } from "../types/types";
import PreviousButton from "../components/previousButton";
import NextButton from "../components/nextButton";
import SliderGroup from "../components/sliderGroup";

interface propsInterface {
  locale: Locale;
}
export default function WeightsPageOne({ locale }: propsInterface) {
  const { pointsLeft, pointsRight } = generatePointsByLine(
    80,
    { x: 0, y: 10 },
    { x: 7, y: 0 },
    0.4,
    0.5
  );

  const topic = "weights";

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
          <div className="flex flex-col items-center w-full">
            <Image
              priority
              src={InOutNeurons}
              alt="Neural Network Diagram"
              width={700}
              height={400}
            />
          </div>
          <div className="w-full items-center text-center mt-10">
            <p>
              <span>
                <span className="NeuraBlue">output1</span> = input1 x weight1,1
                + input2 x weight2,1
              </span>
            </p>
            <p>
              <span>
                <span className="NeuraRed">output2</span> = input2 x weight1,2 +
                input2 x weight2,2
              </span>
            </p>
          </div>
          <div className="w-12/12">
            <SliderGroup neuronCounts={[2, 2]}></SliderGroup>
          </div>
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
