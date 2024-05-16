"use client";

import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/common/Navbar";
import { useState } from "react";
import axios from "axios";

export default function Component() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!email.endsWith("@op.iitg.ac.in" || !email.endsWith("@iitg.ac.in"))) {
      alert("Please use IITG email");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }

    try {
      const res = await axios.post("/api/create-user", {
        firstName,
        lastName,
        email,
        password,
      });

      if (res.status === 200) {
        alert("Account created successfully");
        window.location.href = "/api/auth/signin/";
      }
      
      

      console.log(res);
    } catch (error) {
      console.log(error);
      alert("Something went wrong. Please try again");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
    }
  };

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Navbar />
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-md space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <p className="text-gray-500 dark:text-gray-400">
                Enter your information to create an account
              </p>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input id="first-name" placeholder="Lee" required onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input id="last-name" placeholder="Robinson" required onChange={(e) => setLastName(e.target.value)}/>
                </div>
              </div>
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
              <p>Already signed up? <Link className="text-blue-500" href="/api/auth/signin/">Log in</Link></p>
              <Button className="w-full" type="submit" onClick={handleSubmit}>
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

