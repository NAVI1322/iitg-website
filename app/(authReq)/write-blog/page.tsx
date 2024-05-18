"use client";

import BlogEditor from "@/components/common/BlogEditor";
import Navbar from "@/components/common/Navbar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div>
       
        <h1 className="text-6xl mt-36">Loading...</h1>
      </div>
    );
  }
 
  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center">
        <BlogEditor />
        <button onClick={() => console.log(session)}>press</button>
      </div>
    </>
  );
};

export default page;
