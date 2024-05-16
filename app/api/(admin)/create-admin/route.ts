import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const POST = async (req: Request) => {
    try {
        const data = await req.json();
        if (data.type == "full") {
            const admin = await prisma.admin.create({
                data: {
                    username: data.username,
                    passcode: data.password,
                    hasFullAccess: true
                }
            });
            return NextResponse.json({ admin }, { status: 200 })

        } else {
            const admin = await prisma.admin.create({
                data: {
                    username: data.username,
                    passcode: data.password
                }
            });
            return NextResponse.json({ admin }, { status: 200 })

        }

    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'An error occured' }, { status: 500 })
    }
}