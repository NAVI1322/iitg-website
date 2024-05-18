"use client";

import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Component() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter()

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // if (!email.endsWith("@op.iitg.ac.in" || !email.endsWith("@iitg.ac.in"))) {
    //   alert("Please use IITG email");
    //   return;
    // }

    // if (password.length < 6) {
    //   alert("Password must be at least 6 characters long");
    //   return;
    // }

    async function Handle_Login() {
        try {
            const response = await axios.post("/api/auth/login-user", {
                email,
                password
            });
            alert(response.data.message);
           
          router.push("/")
      
         
      
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while logging in. Please try again.");
        }


    }

    Handle_Login();
}


  return (
    <div className="flex flex-col min-h-[100dvh]">
      
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-md space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">Login</h1>
              <p className="text-gray-500 dark:text-gray-400">
                Enter your information to login an account
              </p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="m.n@op.iitg.ac.in (email id will not be visible to public)"
                  required
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  required
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <p>Create an Account? <Link className="text-blue-500" href="/api/auth/signin/">Sign Up</Link></p>
              <Button className="w-full" type="submit" onClick={handleSubmit}>
                Login
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function MountainIcon(props: any) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}