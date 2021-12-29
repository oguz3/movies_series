import { useEffect, useState } from "react";
import { useFeed } from "hooks/useFeed";
import { Movie } from "@interfaces/index";
import { sortAlphaNum } from "lib/sort";

const SeriesPage = () => {
  const { data, isLoading, isError } = useFeed();
  const [searchValue, setSearchValue] = useState(null);
  const [series, setSeries] = useState(null);

  useEffect(() => {
    if (data && data.entries && !!data.entries.length) {
      const allSeries = data?.entries
        .filter((data) => data?.programType === "series")
        .sort(sortAlphaNum);
      const newSeries = allSeries.filter((data) => data?.releaseYear > 2010);

      if (searchValue && searchValue.length >= 3) {
        const filterSeries = allSeries.filter((serie: Movie) =>
          serie.title.toLocaleLowerCase().includes(searchValue)
        );
        setSeries(filterSeries);
      } else {
        setSeries(newSeries);
      }
    }
  }, [data, searchValue]);

  if (isLoading) {
    return "Loading...";
  }

  if (isError) {
    return "Error...";
  }

  return (
    <div>
      <input
        name="search"
        placeholder="search..."
        onChange={(e) => setSearchValue(e?.target?.value.toLocaleLowerCase())}
      />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {series &&
          !!series.length &&
          series.slice(0, 21).map((serie: Movie, index: number) => {
            return (
              <div style={{ maxWidth: "200px", margin: "10px" }} key={index}>
                <img
                  width={200}
                  height={300}
                  src={serie?.images["Poster Art"]?.url}
                  alt={serie.title}
                />
                <h4>{serie.title}</h4>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SeriesPage;
