import React, { useEffect, useState } from "react";
import Card from "@components/Card";
import CardWrapper from "@components/CardWrapper";
import SearchInput from "@components/UI/SearchInput";
import Select from "@components/UI/Select";

import { selectOptions } from "@data/sample";
import { useFeed } from "hooks/useFeed";
import { Movie } from "@interfaces/index";
import {
  ascendingSortAlphaNum,
  ascendingSortWithYear,
  descadingSortAlphaNum,
  descadingSortWithYear,
} from "lib/sort";

import styles from "./List.module.scss";

type Props = {
  type: "series" | "movie";
};

const List: React.FC<Props> = ({ type }) => {
  const { data, isLoading, isError } = useFeed();
  const [searchValue, setSearchValue] = useState(null);
  const [selectValue, setSelectValue] = useState("title_ascending");
  const [listData, setListData] = useState(null);

  const sortObject = {
    year_descending: descadingSortWithYear,
    year_ascending: ascendingSortWithYear,
    title_descending: descadingSortAlphaNum,
    title_ascending: ascendingSortAlphaNum,
  };

  useEffect(() => {
    if (data && data.entries && !!data.entries.length) {
      const allListData = data?.entries
        .filter((data) => data?.programType === type)
        .sort(sortObject[selectValue]);
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
  }, [data, searchValue, selectValue]);

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
        <div className="container">Oops, something went wrong...</div>
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
            options={selectOptions}
            onChange={(e) => setSelectValue(e?.value)}
          />
        </div>

        {listData && !!listData.length ? (
          <CardWrapper>
            {listData?.slice(0, 21)?.map((listItem: Movie, index: number) => {
              return <Card {...listItem} key={index} />;
            })}
          </CardWrapper>
        ) : (
          <h5>Oops! No Data Found</h5>
        )}
      </div>
    </section>
  );
};

export default List;
