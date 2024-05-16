import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const POST = async (req: Request) => {
    const body = await req.json();
    try {

        await prisma.comment.deleteMany({
            where: {
                blogId: body.id
            },
        });


        const res = await prisma.blog.delete({
            where: {
                id: body.id
            },
        })
        return NextResponse.json(res);
    } catch (error) {
        console.log(error)
        return NextResponse.json({error: "An error occurred"}, {status: 500})
    }
} 