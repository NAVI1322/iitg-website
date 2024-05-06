import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

const handler = async (req: Request) => {
  const { title, content, authorEmail, authorId } = await req.json();

  try {
    const res = await prisma.blog.create({
      data: {
        title,
        content,
        author: {
          connect: {
            email: authorEmail,
            id: parseInt(authorId),
          },
        },
      },
    });
    return NextResponse.json(res);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Something went wrong" });
  }
};

export { handler as POST };
