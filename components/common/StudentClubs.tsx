import Link from 'next/link'
import React from 'react'

const StudentClubs = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-8 px-4 md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Student Clubs
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Explore the vibrant student clubs and organizations on our campus.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border bg-white p-4 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:bg-gray-950">
              <div className="flex items-center gap-4">
                <img
                  alt="Club Logo"
                  className="h-12 w-12 rounded-full"
                  height={50}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "50/50",
                    objectFit: "cover",
                  }}
                  width={50}
                />
                <div className="space-y-1">
                  <h3 className="text-lg font-bold">Computer Science Club</h3>
                  <p className="text-gray-500 line-clamp-2 dark:text-gray-400">
                    Explore the latest trends and technologies in computer
                    science.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-white p-4 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:bg-gray-950">
              <div className="flex items-center gap-4">
                <img
                  alt="Club Logo"
                  className="h-12 w-12 rounded-full"
                  height={50}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "50/50",
                    objectFit: "cover",
                  }}
                  width={50}
                />
                <div className="space-y-1">
                  <h3 className="text-lg font-bold">Sustainability Club</h3>
                  <p className="text-gray-500 line-clamp-2 dark:text-gray-400">
                    Join us in promoting eco-friendly practices on campus.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-white p-4 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:bg-gray-950">
              <div className="flex items-center gap-4">
                <img
                  alt="Club Logo"
                  className="h-12 w-12 rounded-full"
                  height={50}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "50/50",
                    objectFit: "cover",
                  }}
                  width={50}
                />
                <div className="space-y-1">
                  <h3 className="text-lg font-bold">Art Club</h3>
                  <p className="text-gray-500 line-clamp-2 dark:text-gray-400">
                    Unleash your creativity and explore various art forms.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-white p-4 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:bg-gray-950">
              <div className="flex items-center gap-4">
                <img
                  alt="Club Logo"
                  className="h-12 w-12 rounded-full"
                  height={50}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "50/50",
                    objectFit: "cover",
                  }}
                  width={50}
                />
                <div className="space-y-1">
                  <h3 className="text-lg font-bold">Entrepreneurship Club</h3>
                  <p className="text-gray-500 line-clamp-2 dark:text-gray-400">
                    Develop your entrepreneurial skills and start your own
                    venture.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              View All Clubs
            </Link>
          </div>
        </div>
      </section>
  )
}

export default StudentClubs