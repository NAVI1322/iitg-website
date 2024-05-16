import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const POST = async (req: Request) => {
    const data = await req.json();
    try {
        const admin = await prisma.admin.findUnique({
            where: {
                username: data.username,
                passcode: data.password
            }
        });
        if (admin) {
            return NextResponse.json({ admin }, { status: 200 })
        } else {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'An error occured' }, { status: 500 })
    }
}