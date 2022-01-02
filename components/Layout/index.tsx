import React, { ReactNode } from "react";
import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

import styles from "./Layout.module.scss";

type Props = {
  children: ReactNode;
  title: string;
};

const Layout: React.FC<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles.layout}>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
