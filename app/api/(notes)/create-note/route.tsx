import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const POST = async (req: Request) => {
  const { title, imageUrl, authorEmail, authorId } = await req.json();
  try {
    const res = await prisma.note.create({
      data: {
        title,
        images: {
          create: [
            {
              url: imageUrl,
            },
          ],
        },
        author: {
          connect: {
            email: authorEmail,
            id: parseInt(authorId),
          },
        },
      },
    });
    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
};
