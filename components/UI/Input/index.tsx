import React from "react";

import styles from "./Input.module.scss";

export type InputProps = {
  name?: string;
  placeholder?: string;
  onChange?: (e: any) => void;
  rest?: any;
};

const Input: React.FC<InputProps> = ({ name, placeholder, onChange, rest }) => {
  return (
    <input
      className={styles.input}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      {...rest}
    />
  );
};

export default Input;
