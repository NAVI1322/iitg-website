"use client";

import Navbar from "@/components/common/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { set } from "react-hook-form";

const page = () => {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);

  if (status === "loading") {
    return (
      <div>
      
        <h1 className="text-6xl mt-36">Loading...</h1>
      </div>
    );
  }
 
  

  const handleFileChange = (e: any) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!file) {
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      const response = await axios.post("/api/s3-upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const data = await response.data;
      
      const res = await axios.post("/api/create-note", {
        title,
        imageUrl: "d2tiq8xmlq55pn.cloudfront.net/" + data.fileName,
        authorEmail: session?.user?.email,
        authorId: session?.user?.id
        
      })
      console.log(res);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen items-center flex flex-col">
      
      <div className="mt-10 w-3/4 flex flex-col gap-10">
        <div>
          <h2 className="mb-2">Title</h2>
          <Input
            className="border border-black"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input type="file" accept="image/*" onChange={handleFileChange} />
        </div>

        <Button onClick={handleSubmit} disabled={loading}>
          {loading ? "Loading..." : "Submit"}
        </Button>
      </div>
    </div>
  );
};

export default page;
