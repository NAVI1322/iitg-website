import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const POST = async (req: Request) => {
    const request = await req.json();
    try {
        const res = await prisma.comment.create({
            data: {
                content: request.content,
                name: request.name,
                authorId: parseInt(request.authorId),
                blogId: parseInt(request.blogId)  
            }
            
            
        });
        return NextResponse.json(res, {status: 200})
    } catch (error) {
        console.log(error)
    }
}