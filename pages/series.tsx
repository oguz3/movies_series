import { useEffect, useState } from "react";
import { useFeed } from "hooks/useFeed";
import { Movie } from "@interfaces/index";
import { sortAlphaNum } from "lib/sort";
import Card from "@components/Card";
import CardWrapper from "@components/CardWrapper";
import Layout from "@components/Layout";

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
    <Layout title="Series">
      <div className="container">
        <input
          name="search"
          placeholder="search..."
          onChange={(e) => setSearchValue(e?.target?.value.toLocaleLowerCase())}
        />
        <CardWrapper>
          {series &&
            !!series.length &&
            series.slice(0, 21).map((serie: Movie, index: number) => {
              return <Card {...serie} key={index} />;
            })}
        </CardWrapper>
      </div>
    </Layout>
  );
};

export default SeriesPage;
