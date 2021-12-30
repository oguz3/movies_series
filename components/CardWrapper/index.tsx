import React from "react";

import styles from "./CardWrapper.module.scss";

const CardWrapper: React.FC<{ children: HTMLElement }> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default CardWrapper;
