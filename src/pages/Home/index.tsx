import AppLayout from "../../components/AppLayout";
import { blogEntryRoute } from "../../constants/route";

const mock = [
  {
    id: "sdkfnk-asfs-df-dsfo-fds-d",
    title: "A Devotee",
    author: "Dan Carlie",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At itaque accusamus vitae praesentium maxime possimus ipsam. Nulla, tempora deleniti autem dolores, fugit velit quam quaerat nostrum alias natus saepe enim!",
  },
  {
    id: "sdkfnk-asfs-df-dsfo-fds-d",
    title: "A Devotee",
    author: "Dan Carlie",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At itaque accusamus vitae praesentium maxime possimus ipsam. Nulla, tempora deleniti autem dolores, fugit velit quam quaerat nostrum alias natus saepe enim!",
  },
  {
    id: "sdkfnk-asfs-df-dsfo-fds-d",
    title: "A Devotee",
    author: "Dan Carlie",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At itaque accusamus vitae praesentium maxime possimus ipsam. Nulla, tempora deleniti autem dolores, fugit velit quam quaerat nostrum alias natus saepe enim!",
  },
  {
    id: "sdkfnk-asfs-df-dsfo-fds-d",
    title: "A Devotee",
    author: "Dan Carlie",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At itaque accusamus vitae praesentium maxime possimus ipsam. Nulla, tempora deleniti autem dolores, fugit velit quam quaerat nostrum alias natus saepe enim!",
  },
];

export default function Home() {
  return (
    <AppLayout>
      <div className="flex flex-col w-full gap-4">
        <h1>All Blogs</h1>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {mock?.map((row) => (
            <div
              key={row.id}
              className="flex flex-col gap-1 border-[1px] border-blue-300 p-2 rounded cursor-pointer"
              onClick={() =>
                window.open(
                  `${blogEntryRoute.replace(":id", row.id)}`,
                  "_blank"
                )
              }
            >
              <div>
                <h2 className="font-bold">{row.title}</h2>
                <p className="font-normal text-[12px]">by {row.author}</p>
              </div>
              <p className="line-clamp-2">{row.content}</p>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
