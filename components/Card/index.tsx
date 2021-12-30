import React from "react";
import Image from "next/image";
import { Movie } from "@interfaces/index";

import styles from "./Card.module.scss";

const Card: React.FC<Movie> = ({ images, title }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image_wrapper}>
        <Image
          width={134}
          height={201}
          layout="responsive"
          src={images["Poster Art"]?.url}
          alt={title || "images"}
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      {title && <h4 className={styles.title}>{title}</h4>}
    </div>
  );
};

export default Card;
