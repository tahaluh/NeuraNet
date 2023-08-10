import { Locale } from "../types/types";
import ptBrLocale from "./pt-br.json";
import enUsLocale from "./en-us.json";

const localesMap: Record<string, Locale> = {
  "pt-br": ptBrLocale,
  "en-us": enUsLocale,
};

export default localesMap;
