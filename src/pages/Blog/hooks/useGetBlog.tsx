import axios from "axios";
import { useQuery } from "react-query";
import { BASE_URL } from "../../../constants";
export const key = "blog/:id";

export default function useGetBlog(id: string) {
  async function fetch(): Promise<any> {
    const endpoint = BASE_URL + key.replace(":id", id);
    return axios.get(endpoint).then(({ data }) => data);
  }

  const { data, isLoading } = useQuery([key], () => fetch(), {
    onError(err) {
      console.error(err);
    },
  });
  return { data, isLoading };
}
