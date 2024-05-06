import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const POST  = async (req: Request) => {
    const data = await req.json();
    try {
        const res = await prisma.user.deleteMany({
            where: {
                email: data.email
            }
        })
        return NextResponse.json(res);
    } catch (error) {
        console.log(error);
    }
}