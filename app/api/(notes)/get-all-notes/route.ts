import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async () => {
    try {
        const res = await prisma.note.findMany({
            include: {
                author: true,
                images: true
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        return NextResponse.json(res, {status: 200});
    } catch (error) {
        console.log(error)
        return NextResponse.json(error);
    }
}