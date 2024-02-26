import { useParams } from "react-router-dom";
import AppLayout from "../../components/AppLayout";
import useGetBlog from "./hooks/useGetBlog";

export default function Blog() {
  const { id }: { id: string } = useParams();
  const { data, isLoading } = useGetBlog(id);

  return (
    <AppLayout>
      {isLoading ? (
        <div>...loading</div>
      ) : (
        <div className="p-4 gap-[32px] flex flex-col overflow-hidden text-wrap flex-wrap">
          <div>
            <h1 className="text-[40px] font-bold">{data?.title}</h1>
            <h6 className="text-[20px] font-semibold">by {data?.author}</h6>
          </div>
          <p className="text-[16px] text-wrap break-all">{data?.content}</p>
        </div>
      )}
    </AppLayout>
  );
}
