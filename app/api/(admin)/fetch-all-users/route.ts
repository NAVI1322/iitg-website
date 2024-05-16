import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async () => {
    try {
        const users = await prisma.user.findMany();
        return NextResponse.json({ users });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
    }
}