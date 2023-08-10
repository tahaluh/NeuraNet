import { Locale } from "../types/types";
import ptBrLocale from "./pt-br.json";
import enUsLocale from "./en-us.json";
import esEsLocale from "./es-es.json";

const localesMap: Record<string, Locale> = {
  "pt-br": ptBrLocale,
  "en-us": enUsLocale,
  "es-es": esEsLocale,
};

export default localesMap;
