import { Movie } from "@interfaces/index";

export const sortAlphaNum = (a: Movie, b: Movie) => {
  return a?.title.localeCompare(b?.title, "en", { numeric: true });
};
