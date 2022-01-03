import React from "react";
import Layout from "@components/Layout";
import List from "modules/List";

const MoviesPage = () => {
  return (
    <Layout title="Movie">
      <List type="movie" />
    </Layout>
  );
};

export default MoviesPage;
