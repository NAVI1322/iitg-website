import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const POST = async (req: Request) => {
    const body = await req.json();
    try {
        const res = await prisma.blog.delete({
            where: {
                id: body.id
            },
        })
        return NextResponse.json(res);
    } catch (error) {
        console.log(error)
    }
} 