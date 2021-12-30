import React from "react";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        <div className="container">
          <div className={styles.header_wrapper}>
            <h2>DEMO Streaming</h2>
            <div>Log in</div>
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
