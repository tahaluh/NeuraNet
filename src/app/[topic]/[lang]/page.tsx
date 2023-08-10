import localesMap from "@/src/locales/localesMap";
import { Locale } from "@/src/types/types";

import DecisionBoundaryPageOne from "@/src/pages/decisionBoundaryPageOne";

function isValidTopic(topic: any): topic is keyof Locale {
  return (
    (Object.keys(localesMap["pt-br"]) as (keyof Locale)[]).includes(topic) &&
    topic != "home"
  );
}

function isValidlang(lang: any): lang is keyof typeof localesMap {
  return lang in localesMap;
}

function switchPage(topic: string, locale: Locale) {
  switch (topic) {
    case "decisionBoundary":
      return (
        <DecisionBoundaryPageOne
          title={locale[topic as keyof Locale].title}
          text={locale[topic as keyof Locale].content.page1}
        />
      );
    case "hiddenLayers":
      return <h1>uepa</h1>;
  }
}

export default function Home(props: {
  params: { topic: string; lang: string };
}) {
  const topic = isValidTopic(props.params.topic)
    ? props.params.topic
    : "decisionBoundary";
  const lang = isValidlang(props.params.lang) ? props.params.lang : "pt-br";

  const localeData = localesMap[lang];

  return switchPage(topic, localeData);
}

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
