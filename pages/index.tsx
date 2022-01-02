import Layout from "@components/Layout";
import Link from "next/link";

const IndexPage = () => {
  return (
    <Layout title="Home">
      <div className="container">
        <Link href="/movies">Movies</Link>
        <Link href="/series">Series</Link>
      </div>
    </Layout>
  );
};

export default IndexPage;
