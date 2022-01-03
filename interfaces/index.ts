export type Images = {
  url?: string;
  width?: number;
  height?: number;
};

export type Movie = {
  title?: string;
  description?: string;
  programType?: string;
  images?: { "Poster Art"?: Images };
  releaseYear?: number;
};

export type Feed = {
  total: number;
  entries: Movie[];
};
