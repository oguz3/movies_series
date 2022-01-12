import Card from "@components/Card";
import CardWrapper from "@components/CardWrapper";
import Layout from "@components/Layout";
import Link from "next/link";

const IndexPage = () => {
  return (
    <Layout title="Home">
      <div className="container">
        <CardWrapper>
          <Link href="/series">
            <a>
              <Card title="Series" category_card />
            </a>
          </Link>
          <Link href="/movie">
            <a>
              <Card title="Movies" category_card />
            </a>
          </Link>
        </CardWrapper>
      </div>
    </Layout>
  );
};

export default IndexPage;
