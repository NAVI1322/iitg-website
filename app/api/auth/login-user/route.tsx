import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import  Jwt from "jsonwebtoken";
import { serialize } from "cookie";
import { COOKIE_NAME } from "@/constants";


const prisma = new PrismaClient();
const MaxAge = 60*60*24*30; // days

export const POST = async (req: Request) => {
    try {
        const { email, password } = await req.json();

        const user = await prisma.user.findFirst({
            where: {
                email: email,
            },
        });

        if (!user) {
            return NextResponse.json({ message: "User does not exist. Please sign up." });
        }
        console.log(user.password)

        const passwordMatch = await bcrypt.compare(password, user.password);

       
        if (!passwordMatch) {
            return NextResponse.json({ message: "Incorrect password." });
        }

        const token = Jwt.sign({ userId: user.id }, "secret Password",{expiresIn:MaxAge});

      const serialized = serialize(COOKIE_NAME,token,{
        httpOnly:true,
        secure:process.env.NODE_ENV==="production",
        sameSite:"strict",
        maxAge:MaxAge,
        path:"/" 
      })
        const response = {
           message:"authenicated"
        }
       return NextResponse.json(response,{
           status:200,
           headers:{"Set-Cookie":serialized}
       });

    } catch (e) {
        console.error("Error: ", e);
        return NextResponse.json(new Error("Internal Server Error"));
    }
};
