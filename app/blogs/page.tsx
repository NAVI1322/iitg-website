import Navbar from '@/components/common/Navbar'
import { error } from 'console';
import Link from 'next/link';
import React from 'react'

const page = async () => {
  let blog;
  const res = await fetch("http://localhost:3000/api/get-all-blogs",
    {
      next: {
        revalidate: 10
      }
    }
  );
  if (res.ok) {
    const data = await res.json();
    blog = data;
  } else {
    console.log(error)
  }
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-10">

        {blog.map(({ id, title, imageUrl, createdAt }: any) => (
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
    </div>
  )
}

export default page