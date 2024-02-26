import AppLayout from "../../components/AppLayout";

const config = [
  {
    id: "title",
    label: "Title",
    type: "text",
  },
  {
    id: "author",
    label: "Author",
    type: "text",
  },
  {
    id: "content",
    label: "Content",
    type: "textarea",
  },
];

const inputClass = "border-[1px]  w-full max-w-[500px] p-2";

export default function NewForm() {
  return (
    <AppLayout>
      <h1>Add new blog</h1>
      <div>
        <form
          onSubmit={(e: any) => {
            const formData = new FormData(e.target);
            const formProps = Object.fromEntries(formData);
            console.log(formProps);
          }}
        >
          {config.map((row) => {
            return (
              <div className={`mt-[24px]`} key={row.id}>
                <h5>{row.label}</h5>
                {row.type === "text" ? (
                  <input
                    required
                    className={inputClass}
                    name={row.id}
                    type="text"
                  />
                ) : (
                  <textarea required className={inputClass} name={row.id} />
                )}
              </div>
            );
          })}
          <input
            type="submit"
            value="Submit"
            className="mt-5 px-6 py-2 border-2 bg-black text-white rounded-md"
          />
        </form>
      </div>
    </AppLayout>
  );
}
