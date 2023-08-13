import { Locale } from "../types/types";
import ptBrLocale from "./pt-br.json";
import enUsLocale from "./en-us.json";
import esEsLocale from "./es-es.json";
import frFrLocale from "./fr-fr.json";

const localesMap: Record<string, Locale> = {
  "pt-br": ptBrLocale,
  "en-us": enUsLocale,
  "es-es": esEsLocale,
  "fr-fr": frFrLocale,
};

export default localesMap;
