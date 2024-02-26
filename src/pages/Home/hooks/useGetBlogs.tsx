import axios from "axios";
import { useQuery } from "react-query";
import { BASE_URL } from "../../../constants";
export const key = "get-blogs";

async function fetch(): Promise<any> {
  const endpoint = BASE_URL + key;
  return axios.get(endpoint).then(({ data }) => data);
}

export default function useGetBlogs() {
  const { data, isLoading } = useQuery([key], () => fetch(), {
    onError(err) {
      console.error(err);
    },
  });
  return { data, isLoading };
}
