import React, { ReactNode } from "react";
import cn from "classnames";

import styles from "./Button.module.scss";

type Props = {
  type?: "button" | "submit" | "reset";
  children: ReactNode;
  secondary?: boolean;
  onClick?: (e: any) => void;
};

const Button: React.FC<Props> = ({
  type = "submit",
  children,
  secondary,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={cn(styles.btn, secondary && styles.secondary)}
    >
      {children}
    </button>
  );
};

export default Button;
