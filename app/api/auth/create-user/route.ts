
import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken'
import { serialize } from "cookie";
import { COOKIE_NAME } from "@/constants";

const prisma = new PrismaClient();

const MaxAge = 60*60*24*30; // days

export const POST = async (req: Request) => {
  const { firstName, lastName, email, password } = await req.json();
 
  try {
    const userExist = await prisma.user.findFirst({
        where: {
            email: email,
        },
    });

    if (userExist) {
        return NextResponse.json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashedPassword,
        },
    });
  
  return NextResponse.json({
    message:"user Signup successfully"
  },{
    status:200
  })

     
         

} catch (error) {
    console.log("Error:", error);
    

}
}