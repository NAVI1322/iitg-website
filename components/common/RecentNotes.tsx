import Link from 'next/link'
import React from 'react'

const RecentNotes = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container grid gap-8 px-4 md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Recent Notes
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Check out the latest study notes and resources shared by our
              students.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            <div className="rounded-lg border bg-white p-4 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:bg-gray-950">
              <div className="space-y-2">
                <h3 className="text-lg font-bold">
                  Calculus I - Limits and Derivatives
                </h3>
                <p className="text-gray-500 line-clamp-2 dark:text-gray-400">
                  Comprehensive notes on the fundamental concepts of limits and
                  derivatives in Calculus I.
                </p>
              </div>
            </div>
            <div className="rounded-lg border bg-white p-4 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:bg-gray-950">
              <div className="space-y-2">
                <h3 className="text-lg font-bold">Introduction to Sociology</h3>
                <p className="text-gray-500 line-clamp-2 dark:text-gray-400">
                  Detailed notes covering the core principles and theories in
                  the introductory Sociology course.
                </p>
              </div>
            </div>
            <div className="rounded-lg border bg-white p-4 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:bg-gray-950">
              <div className="space-y-2">
                <h3 className="text-lg font-bold">
                  Organic Chemistry - Functional Groups
                </h3>
                <p className="text-gray-500 line-clamp-2 dark:text-gray-400">
                  Comprehensive study guide on the various functional groups and
                  their properties in Organic Chemistry.
                </p>
              </div>
            </div>
            <div className="rounded-lg border bg-white p-4 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:bg-gray-950">
              <div className="space-y-2">
                <h3 className="text-lg font-bold">
                  Introduction to Programming in Python
                </h3>
                <p className="text-gray-500 line-clamp-2 dark:text-gray-400">
                  Beginner-friendly notes covering the fundamentals of
                  programming in Python.
                </p>
              </div>
            </div>
            <div className="rounded-lg border bg-white p-4 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:bg-gray-950">
              <div className="space-y-2">
                <h3 className="text-lg font-bold">
                  World History - The Renaissance Era
                </h3>
                <p className="text-gray-500 line-clamp-2 dark:text-gray-400">
                  Detailed overview of the key events, figures, and cultural
                  developments during the Renaissance period.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              View All Notes
            </Link>
          </div>
        </div>
      </section>
  )
}

export default RecentNotes