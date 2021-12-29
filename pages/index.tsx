import Link from "next/link";

const IndexPage = () => {
  return (
    <div>
      <Link href="/movies">Movies</Link>
      <Link href="/series">Series</Link>
    </div>
  );
};

export default IndexPage;
