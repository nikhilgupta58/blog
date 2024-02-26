import AppLayout from "../../components/AppLayout";

const mock = {
  id: "sdkfnk-asfs-df-dsfo-fds-d",
  title: "A Devotee",
  author: "Dan Carlie",
  content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. At itaque accusamus vitae praesentium maxime possimus ipsam. Nulla, tempora deleniti autem dolores, fugit velit quam quaerat nostrum alias natus saepe enim!",
};

export default function Blog() {
  const data = mock;
  return (
    <AppLayout>
      <div className="p-4 gap-[32px] flex flex-col">
        <div>
          <h1 className="text-[40px] font-bold">{data.title}</h1>
          <h6 className="text-[20px] font-semibold">by {data.author}</h6>
        </div>
        <p className="text-[16px]">{data?.content}</p>
      </div>
    </AppLayout>
  );
}
