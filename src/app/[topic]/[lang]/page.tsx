import localesMap from "@/src/locales/localesMap";
import { Locale } from "@/src/types/types";

import DecisionBoundaryPageOne from "@/src/pages/decisionBoundaryPageOne";
import OutlinedButton from "@/src/components/outlinedButton";

function isValidTopic(topic: any): topic is keyof Locale {
  return (Object.keys(localesMap["pt-br"]) as (keyof Locale)[]).includes(topic);
}

function isValidlang(lang: any): lang is keyof typeof localesMap {
  return lang in localesMap;
}

function switchPage(topic: string, locale: Locale, lang: string) {
  switch (topic) {
    case "home":
      return <h1>home</h1>;
    case "decisionBoundary":
      return <DecisionBoundaryPageOne locale={locale} />;
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

  return switchPage(topic, localeData, lang);
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
