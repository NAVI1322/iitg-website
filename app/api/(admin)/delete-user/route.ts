import { PrismaClient} from "@prisma/client"
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const POST = async (req: Request) => {
    const body = await req.json();
    try {
        const user = await prisma.user.delete({
            where: {
                email: body.email
            }
        });
        return NextResponse.json({ user });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
    }
}