import React from "react";

import styles from "./Input.module.scss";

type Props = {
  name: string;
  placeholder: string;
  onChange: (e: any) => void;
  rest?: any;
};

const Input: React.FC<Props> = ({ name, placeholder, onChange, rest }) => {
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
