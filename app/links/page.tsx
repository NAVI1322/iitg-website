/**
 * v0 by Vercel.
 * @see https://v0.dev/t/dKPis6LuEJG
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Navbar from "@/components/common/Navbar"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-100 dark:bg-gray-800 py-8 mt-32">
        <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-900">
            <h2 className="mb-4 text-xl font-bold">Study Material - BOOKS</h2>
            <p className="mb-4 text-gray-600 dark:text-gray-400">this is a collection of all the books recommended by our teachers!</p>
            <Link
              className="inline-flex items-center rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
              href="https://drive.google.com/drive/folders/1XVbouVzu-4WgiHR6uyVyjV-oFN5AoGYi?usp=drive_link"
              rel="noopener noreferrer"
              target="_blank"
            >
              <LinkIcon className="mr-2 h-5 w-5" />
              Open Link
            </Link>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-900">
            <h2 className="mb-4 text-xl font-bold">IITG Support Email</h2>
            <p className="mb-4 text-gray-600 dark:text-gray-400">For any query related to coursework, degree prograam etc.</p>
            <Link
              className="inline-flex items-center rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
              href="#"
            >
              <MailIcon className="mr-2 h-5 w-5" />
              support_bsc_dsai@op.iitg.ac.in
            </Link>
          </div>
          
          
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-900">
            <h2 className="mb-4 text-xl font-bold">Coursera Support Email</h2>
            <p className="mb-4 text-gray-600 dark:text-gray-400">Overdue assignments, marks are not visible, submission enquiry etc.</p>
            <Link
              className="inline-flex items-center rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
              href="#"
            >
              <MailIcon className="mr-2 h-5 w-5" />
              degree-students@coursera.org
            </Link>
          </div>
          
        </div>
      </main>
      
    </div>
  )
}

function FileIcon(props: any) {
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
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  )
}


function LinkIcon(props: any) {
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
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
}


function MailIcon(props: any) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}