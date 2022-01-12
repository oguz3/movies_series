import React from "react";
import Layout from "@components/Layout";
import List from "modules/List";

import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  const { slug } = router.query;

  const page404 = slug !== "movie" && slug !== "series";

  return (
    <Layout title={page404 ? "404" : slug}>
      {!page404 ? (
        <List type={slug} />
      ) : (
        <div className="container">
          <h2>Page not found!</h2>
        </div>
      )}
    </Layout>
  );
};

export default Page;
