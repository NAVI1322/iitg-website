import Navbar from "@/components/common/Navbar";
import RecentBlog from "@/components/common/RecentBlog";
import RecentNotes from "@/components/common/RecentNotes";
import StudentClubs from "@/components/common/StudentClubs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full">
    
      <section className="w-full py-8">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mt-16 max-md:mt-0">
                  Unofficial website made by students for students
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  If you have any questions, feel free to ask by pressing this button, or contact me on mannas@firstbillion.tech
                </p>
              </div>
              <div className="flex flex-col  gap-2 min-[400px]:flex-row ">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  ASK AI
                </Link>
              </div>
            </div>
            <img
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              height="550"
              src="/hero.png"
              width="550"
            />
          </div>
        </div>
      </section>
      <RecentBlog />
      <RecentNotes />
      <StudentClubs />
    </main>
  );
}
