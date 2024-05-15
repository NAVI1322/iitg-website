"use client"

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";


const RecentBlog = () => {

  const [blogs, setBlogs] = useState([]);

  const fetchAllBlogs = async () => {
    try {
      const res = await axios.get("/api/get-recent-blogs");
      console.log(res);
      setBlogs(res.data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchAllBlogs();
  }, [])


  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-8 px-4 md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Recent Blogs
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Check out the latest updates from our college blog.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {
            blogs.map((blog: any) => (
              <div className="group rounded-lg border transition-all hover:shadow-lg dark:border-gray-800">
                <img
                  alt="Blog Post"
                  className="aspect-[3/2] w-full rounded-t-lg object-cover object-center transition-all group-hover:scale-105"
                  height="200"
                  src={`https://${blog.imageUrl}`}
                  width="300"
                />
                <div className="space-y-2 p-4">
                  <h3 className="text-xl font-bold">
                    {blog.title}
                  </h3>
                  
                  <Link
                    className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href={`/blog/${blog.id}`}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))
          }

        </div>
        <div className="flex justify-center">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="/blogs"
          >
            View All Blogs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentBlog;
