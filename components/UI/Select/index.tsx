import React, { useEffect, useState } from "react";
import Image from "next/image";
import cn from "classnames";

import styles from "./Select.module.scss";

type Props = {
  options?: Array<string>;
  onChange?: (e: any) => void;
};

const Select: React.FC<Props> = ({ options, onChange }) => {
  const [activeValue, setActiveValue] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    onChange(activeValue);
  }, [activeValue]);

  return (
    <div className={styles.select}>
      <button
        className={cn(!activeValue && styles.placeholder)}
        onClick={() => setIsOpen(!isOpen)}
      >
        {activeValue ? activeValue : "Sort by"}
        <Image
          width={13}
          height={8}
          layout="fixed"
          src={"/images/down.png"}
          alt={"search"}
          objectFit="cover"
          objectPosition="center"
        />
      </button>
      <div className={cn(isOpen && styles.open)}>
        <ul>
          {options &&
            !!options.length &&
            options.map((item, index) => (
              <li key={index}>
                <a
                  onClick={() => {
                    setActiveValue(item);
                    setIsOpen(false);
                  }}
                  className={cn(item === activeValue && styles.active)}
                >
                  {item}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Select;
