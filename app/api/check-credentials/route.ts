import * as bcrypt from 'bcrypt'
import { PrismaClient } from '@prisma/client/extension';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();




export const POST = async (req: Request)  => {
    try {
        const body = await req.json();

        const res = await prisma.user.findFirst({
            where: {
                email: body.email
            }
        })
        if (res) { 
            const isPasswordCorrect = await bcrypt.compare(body.password, res.password)
            if (isPasswordCorrect) {
                return NextResponse.json(res)
            } else {
                return null
            }
        } else {
            return null
        }
        
    } catch (error) {
     console.log(error)   
    }
}