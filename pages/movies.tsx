import { useFeed } from "hooks/useFeed";

const MoviesPage = () => {
  const { status, data, error, isFetching } = useFeed();

  return <h1>{isFetching ? "Loading..." : data?.total + "data"}</h1>;
};

export default MoviesPage;
