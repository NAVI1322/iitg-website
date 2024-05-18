"use client";

import Navbar from "@/components/common/Navbar";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";
import { getUser } from "@/hooks/cookieData";
import { NextResponse } from "next/server";

const inter = Inter({ subsets: ["latin"] });

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSuccess, setSuccess]= useState(false)

  const router = useRouter();

  useEffect(() => {
    (async () => {
      const { user, error } = await getUser();

      if (error) {
        router.push("/log-in");
        return;
      }
      setSuccess(true)
    })();
  }, [router]);

  if(isSuccess===false)
  {
    return<div className="items-center h-screen justify-center flex">
      Loading
    </div>
  }

  return (
    <div className={`${inter.className} overflow-x-hidden`}>
      
      {children}
    </div>
  );
}





