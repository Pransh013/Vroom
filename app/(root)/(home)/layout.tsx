import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "VROOM",
  description: "A workspace for your team, powered by Stream Chat and Clerk.",
};


const HomeLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="relative">
      <Navbar />
      <section className="flex items-center">
        <Sidebar />
        <section className="flex min-h-screen bg-foreground  flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
          <section className="w-full">{children}</section>
        </section>
      </section>
    </main>
  );
};

export default HomeLayout;
