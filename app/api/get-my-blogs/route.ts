import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export const POST = async (req: Request) => {
    const body = await req.json();
    try {
        const res = await prisma.blog.findMany({
            where: {
                authorId: parseInt(body.id)
            }
        })
        return NextResponse.json(res, { status: 200 });;
    } catch (error) {
        return NextResponse.json({ error: "Something went wrong" });
    }
}