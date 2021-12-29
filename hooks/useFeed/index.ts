import { Feed } from "@interfaces/index";
import axios from "axios";
import { useQuery } from "react-query";

export const useFeed = () => {
  return useQuery("posts", async (): Promise<Feed> => {
    const { data } = await axios.get("api/feed");
    return data;
  });
};
