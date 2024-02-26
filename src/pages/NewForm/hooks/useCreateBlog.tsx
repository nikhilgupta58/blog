import axios from "axios";
import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import { BASE_URL } from "../../../constants";
import { blogEntryRoute } from "../../../constants/route";
export const key = "create-blog";

async function create(payload: any): Promise<any> {
  const endpoint = BASE_URL + key;
  return axios.post(endpoint, payload).then(({ data }) => data);
}

export default function useCreateBlog() {
  const history = useHistory();
  const { data, isLoading, mutate } = useMutation(
    [key],
    (payload: any) => create(payload),
    {
      onError(err) {
        console.error(err);
      },
      onSuccess(successData) {
        history.push(`${blogEntryRoute.replace(":id", successData.id)}`);
      },
    }
  );
  return { data, isLoading, mutate };
}
