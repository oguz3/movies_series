import { Movie } from "@interfaces/index";

export const ascendingSortAlphaNum = (a: Movie, b: Movie) => {
  return a?.title.localeCompare(b?.title, "en", { numeric: true });
};

export const descadingSortAlphaNum = (a: Movie, b: Movie) => {
  return b?.title.localeCompare(a?.title, "en", { numeric: true });
};

export const ascendingSortWithYear = (a: Movie, b: Movie) => {
  return a?.releaseYear - b?.releaseYear;
};

export const descadingSortWithYear = (a: Movie, b: Movie) => {
  return a?.releaseYear + b?.releaseYear;
};
