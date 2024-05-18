import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server"


const prisma = new PrismaClient();

async function POST(req:Request)
{
    const {id} = await req.json()

   try{
    const user = await prisma.user.findFirst({
        where:{id:id}
    })

    if(!user)
    return NextResponse.json({
        message:"user Not Exist",
        UserStatus:false})

    return NextResponse.json({
        message:"user Exist",
        UserStatus:true,
    })

   }
   catch(e)
   {
        console.log("Error  : " + e)
   }


}