import React from "react";
import Image from "next/image";
import { Movie } from "@interfaces/index";
import cn from "classnames";

import styles from "./Card.module.scss";

type Props = Movie & {
  category_card?: boolean;
};

const Card: React.FC<Props> = ({ images, title, category_card }) => {
  return (
    <div className={styles.card}>
      <div
        className={cn(
          styles.image_wrapper,
          category_card && styles.placeholder
        )}
      >
        <Image
          width={134}
          height={category_card ? 134 : 201}
          layout={category_card ? "fixed" : "responsive"}
          src={images ? images["Poster Art"]?.url : "/images/placeholder.png"}
          alt={title || "images"}
          objectFit="cover"
          objectPosition="center"
        />
        {category_card && <h6>{title}</h6>}
      </div>
      {title && (
        <h4 className={styles.title}>
          {category_card && "Popular "}
          {title}
        </h4>
      )}
    </div>
  );
};

export default Card;
