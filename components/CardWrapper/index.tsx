import React, { ReactNode } from "react";

import styles from "./CardWrapper.module.scss";

const CardWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default CardWrapper;
