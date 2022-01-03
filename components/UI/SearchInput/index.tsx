import React, { useState } from "react";
import Input, { InputProps } from "@components/UI/Input";
// import Button from "@components/UI//Button";

import styles from "./SearchInput.module.scss";
import Image from "next/image";

type Props = InputProps & {
  onClick?: (e: any) => void;
};

const SearchInput: React.FC<Props> = ({ onClick, ...rest }) => {
  const [searchValue, setSearchValue] = useState(null);

  return (
    <div className={styles.search}>
      <Input
        {...rest}
        onChange={(e) => setSearchValue(e?.target?.value.toLocaleLowerCase())}
      />
      <button onClick={() => onClick(searchValue)}>
        <Image
          width={21}
          height={21}
          layout="fixed"
          src={"/images/search.png"}
          alt={"search"}
          objectFit="cover"
          objectPosition="center"
        />
      </button>
    </div>
  );
};

export default SearchInput;
