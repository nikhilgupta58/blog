import Header from "./components/Header";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-[100vh] w-full">
      <Header />
      <div className="flex-grow overflow-scroll p-4">{children}</div>
    </div>
  );
}
