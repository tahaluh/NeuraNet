const getPath = {
  home: (lang: string) => `/home/${lang}`,
  decisionBoundary: (lang: string) => `/decisionBoundary/${lang}`,
  weights: (lang: string) => `/weights/${lang}`,
  bias: (lang: string) => `/bias/${lang}`,
  hiddenLayers: (lang: string) => `/hiddenLayers/${lang}`,
  activationFunction: (lang: string) => `/activationFunction/${lang}`,
};

export default getPath;
