"use client";

import axios from "axios";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const deleteUser = async () => {
    try {
      const res = await axios.post("/api/delete-users", {
        email: "n.mannas@op.iitg.ac.in",
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    setIsNavbarVisible(scrollPosition < 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`overflow-hidden h-auto w-screen flex justify-between items-center bg-blue-400 z-10 transition-transform duration-300 ${
        isNavbarVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Image
        src="/iitg-logo.png"
        alt="iitg logo"
        width={60}
        height={60}
        className="p-1"
        onClick={() => router.push("/")}
      />
      <ul className="flex p-1 justify-evenly w-1/2 max-md:hidden">
        <li>
          <Link href="/links">Important links</Link>
        </li>
        <li><Link href="/notes">Notes</Link></li>
        <li><Link href="/blogs">Blogs</Link></li>
        <li>
          <Link href="/write-blog">Write a blog</Link>
        </li>
        <li>
          <Link href="/my-blogs">My blogs</Link>
        </li>
        {status == "unauthenticated" ? (
          <li
            className="cursor-pointer"
            onClick={() => router.push("/sign-up")}
          >
            Login
          </li>
        ) : (
          <li className="cursor-pointer" onClick={() => signOut()}>
            Logout
          </li>
        )}
      </ul>
      <div className="md:hidden flex mr-10">
        <Sheet>
          <SheetTrigger>
            <img src="/menu.svg" alt="menu" />
            Menu
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <ul className="flex p-1 justify-evenly w-1/2 flex-col gap-14">
                <li>
                  <Link href="/links">Important links</Link>
                </li>
                <li><Link href="/notes">Notes</Link></li>
                <li><Link href="/blogs">Blogs</Link></li>
                <li>
                  <Link href="/write-blog">Write a blog</Link>
                </li>
                <li>
                  <Link href="/my-blogs">My blogs</Link>
                </li>
                {status == "unauthenticated" ? (
                  <li
                    className="cursor-pointer"
                    onClick={() => router.push("/sign-up")}
                  >
                    Login
                  </li>
                ) : (
                  <li className="cursor-pointer" onClick={() => signOut()}>
                    Logout
                  </li>
                )}
              </ul>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
