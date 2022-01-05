import Button from "@components/UI/Button";
import React from "react";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        <div className="container">
          <div className={styles.header_wrapper}>
            <h2>DEMO Streaming</h2>
            <div className={styles.btn_wrapper}>
              <Button>Log in</Button>
              <Button secondary>Start your free trial</Button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.subheader}>
        <div className="container">
          <h4>Popular Titles</h4>
        </div>
      </div>
    </header>
  );
};

export default Header;
