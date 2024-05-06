import Navbar from "@/components/common/Navbar";
import RecentBlog from "@/components/common/RecentBlog";
import RecentNotes from "@/components/common/RecentNotes";
import StudentClubs from "@/components/common/StudentClubs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <RecentBlog />
      <RecentNotes />
      <StudentClubs />
    </main>
  );
}
