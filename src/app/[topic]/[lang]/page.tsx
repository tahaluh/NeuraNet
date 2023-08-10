import NeuraChart from "../../../components/neuraChart";
import generatePointsByLine from "../../../utils/generatePointsByLine";
import localesMap from "@/src/locales/localesMap";
import FormattedParagraphs from "@/src/components/formattedParagraphs";
import { Locale } from "@/src/types/types";

function isValidTopic(topic: any): topic is keyof Locale {
  return (
    (Object.keys(localesMap["pt-br"]) as (keyof Locale)[]).includes(topic) &&
    topic != "home"
  );
}

function isValidlang(lang: any): lang is keyof typeof localesMap {
  return lang in localesMap;
}

export default function Home(props: {
  params: { topic: string; lang: string };
}) {
  const topic = isValidTopic(props.params.topic)
    ? props.params.topic
    : "decisionBoundary";
  const lang = isValidlang(props.params.lang) ? props.params.lang : "pt-br";

  const localeData = localesMap[lang];

  const { pointsLeft, pointsRight } = generatePointsByLine(
    80,
    { x: 0, y: 10 },
    { x: 7, y: 0 },
    0.4,
    0.5
  );

  return (
    <main className="flex flex-row flex-wrap items-start justify-center h-screen">
      {/* Título Centralizado */}
      <h1 className="text-3xl font-bold mb-2 mt-8 w-screen text-center Montserrat">
        {localeData[topic].title}
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
          <FormattedParagraphs texts={localeData[topic].content.page1} />
        </div>
      </div>
    </main>
  );
}
/* {
  params: { category },
}: {
  params: { category: string }
})
*/

export const generateStaticParams = ({
  params,
}: {
  params: { topic: string };
}) => {
  const langs = Object.keys(localesMap);
  /* const topic = params.topic;

  const combinations = [];
  for (const lang of langs) {
    combinations.push({ lang, topic });
  } */

  return langs.map((lang) => {
    return { lang: lang };
  });
};