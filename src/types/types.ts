export interface Coordinates {
  x: number;
  y: number;
}

export interface Locale {
  /* home: {
    welcomeMessage: string;
    about: string;
    contact: string;
  }; */
  decisionBoundary: {
    title: string;
    content: {
      page1: string[];
    };
  };
  weights: {
    title: string;
    content: {
      page1: string[];
      page2: string[];
    };
  };
  bias: {
    title: string;
    content: {
      page1: string[];
      page2: string[];
    };
  };
  hiddenLayers: {
    title: string;
    content: {
      page1: string[];
      page2: string[];
    };
  };
  activationFunction: {
    title: string;
    content: {
      page1: string[];
      page2: string[];
    };
  };
  utils: { next: string; previous: string; lang: string };
}
