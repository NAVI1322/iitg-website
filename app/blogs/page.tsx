"use client";

import { Input } from "@/components/ui/input";
import Link from "next/link";
import Navbar from "@/components/common/Navbar";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function Component() {
  const { data: session, status } = useSession();
  const [loading, setIsLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);

  const fetchMyBlogs = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get("/api/get-all-blogs");
      if (Array.isArray(res.data)) {
        setBlogs(res.data);
      } else {
        console.error('res.data is not an array:', res.data);
        setBlogs([]); // set blogs to an empty array if res.data is not an array
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMyBlogs();
  }, [session]);

  if (status === "loading") {
    return (
      <div>
        <Navbar />
        <h1 className="text-6xl mt-36">Loading...</h1>
      </div>
    );
  }

  

  

  return (
    <main>
      <Navbar />
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen py-12 mt-10 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              All Blogs
            </h1>
            <div className="relative w-full max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
                placeholder="Search blog posts..."
                type="text"
              />
            </div>
          </div>

          {loading ? (
            <div className="text-gray-900 dark:text-gray-100 text-xl font-semibold">
              Loading...
            </div>
          ) : blogs.length === 0 ? (
            <div className="text-gray-900 dark:text-gray-100 text-xl font-semibold">
              No blogs found
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

              {blogs.map(({ id, title, imageUrl, description, createdAt }) => (
                <div
                  key={id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
                >
                  <img
                    alt="Blog Post Image"
                    className="w-full h-48 object-cover"
                    height={225}
                    src={`https://${imageUrl}`}
                    style={{
                      aspectRatio: "400/225",
                      objectFit: "cover",
                    }}
                    width={400}
                  />
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                      {title}
                    </h2>
                    

                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {createdAt}
                      </span>
                      <Link
                        className="text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-500 font-medium"
                        href={`/blog/${id}`}
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
