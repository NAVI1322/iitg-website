import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async () => {
    try {
        const res = await prisma.blog.findMany({
            orderBy: {
            createdAt: 'desc'
            }
        });
        console.log(res)
        return NextResponse.json(res)
    } catch (error) {
        console.log(error)
        return NextResponse.json(error, { status: 500 })
    }
}