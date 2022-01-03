import React, { useEffect, useState } from "react";
import { useFeed } from "hooks/useFeed";
import { Movie } from "@interfaces/index";
import { sortAlphaNum } from "lib/sort";
import Card from "@components/Card";
import CardWrapper from "@components/CardWrapper";
import SearchInput from "@components/UI/SearchInput";
import Select from "@components/UI/Select";

import styles from "./List.module.scss";

type Props = {
  type: "series" | "movie";
};

const List: React.FC<Props> = ({ type }) => {
  const { data, isLoading, isError } = useFeed();
  const [searchValue, setSearchValue] = useState(null);
  const [listData, setListData] = useState(null);

  useEffect(() => {
    if (data && data.entries && !!data.entries.length) {
      const allListData = data?.entries
        .filter((data) => data?.programType === type)
        .sort(sortAlphaNum);
      const newListData = allListData.filter(
        (data) => data?.releaseYear > 2010
      );

      if (searchValue && searchValue.length >= 3) {
        const filterListData = allListData.filter((item: Movie) =>
          item.title.toLocaleLowerCase().includes(searchValue)
        );
        setListData(filterListData);
      } else {
        setListData(newListData);
      }
    }
  }, [data, searchValue]);

  if (isLoading) {
    return (
      <section>
        <div className="container">Loading...</div>
      </section>
    );
  }

  if (isError) {
    return (
      <section>
        <div className="container">Error...</div>
      </section>
    );
  }

  return (
    <section>
      <div className="container">
        <div className={styles.filter}>
          <SearchInput
            name="search"
            placeholder="search..."
            onClick={(e) => setSearchValue(e)}
          />
          <Select
            options={[
              "Sort by year in descending order",
              "Sort by year in ascending order",
              "Sort by title in descending order",
              "Sort by title in ascending order",
            ]}
            onChange={(e) => console.log(e)}
          />
        </div>

        <CardWrapper>
          {listData &&
            !!listData.length &&
            listData.slice(0, 21).map((listItem: Movie, index: number) => {
              return <Card {...listItem} key={index} />;
            })}
        </CardWrapper>
      </div>
    </section>
  );
};

export default List;
