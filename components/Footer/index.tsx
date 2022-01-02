import Icon from "@components/UI/Icon";
import Link from "next/link";
import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <ul className={styles.link_list}>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Terms and Conditions</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Privacy Policy</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Collection Statement</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Help</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Manage Account</a>
            </Link>
          </li>
        </ul>
        <h6>Copyright © 2016 DEMO Streaming. All Rights Reserved.</h6>
        <div className={styles.icons}>
          <div className={styles.social}>
            <Link href="/">
              <a>
                <Icon icon="facebook-white" size={30} color="#fff" />
              </a>
            </Link>
            <Link href="/">
              <a>
                <Icon icon="twitter-white" size={30} color="#fff" />
              </a>
            </Link>
            <Link href="/">
              <a>
                <Icon icon="instagram-white" size={30} color="#fff" />
              </a>
            </Link>
          </div>
          <div className={styles.store}>
            <Link href="/">
              <a>
                <Icon icon="app-store" size={135} />
              </a>
            </Link>
            <Link href="/">
              <a>
                <Icon icon="play-store" size={135} />
              </a>
            </Link>
            <Link href="/">
              <a>
                <Icon icon="windows-store" size={110} />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
