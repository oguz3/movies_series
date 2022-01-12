import React from "react";
import Layout from "@components/Layout";
import List from "modules/List";

import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  const slug = router.query.slug || [];

  const page404 = !!slug.length
    ? slug[0] !== "movie" && slug[0] !== "series"
    : false;

  return (
    <Layout title={page404 ? "404" : slug[0]}>
      {!page404 ? (
        <List type={slug[0]} />
      ) : (
        <div className="container">
          <h2>Page not found!</h2>
        </div>
      )}
    </Layout>
  );
};

export default Page;
