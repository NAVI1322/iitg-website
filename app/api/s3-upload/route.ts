import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { NextResponse } from "next/server";

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
  },
});

// const uploadFileToS3 = async (file: Buffer, fileName: string) => {
//   const fileBuffer = file;
//   const params = {
//     Bucket: "iitg-website",
//     Key: `${fileName}-${Date.now()}`,
//     Body: fileBuffer,
//     ContentType: "image/jpg",
//   };

//   const command = new PutObjectCommand(params);
//   await s3Client.send(command);
//   console.log(params.Key)
// };

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file: any = formData.get("file");

    if (!file) {
      return NextResponse.json({ message: "No file provided" }, { status: 400 });
    }

    const buffer = await file.arrayBuffer();
    const fileName = (file as File).name;
    const bufferFile = Buffer.from(buffer);
    // const uploadedFileName = await uploadFileToS3(Buffer.from(buffer), fileName);
    const params = {
      Bucket: "iitg-website",
      Key: `${fileName}-${Date.now()}`,
      Body: bufferFile,
      ContentType: "image/jpg",
    };
  
    const command = new PutObjectCommand(params);
    await s3Client.send(command);
    console.log(params.Key)
    return NextResponse.json({
      message: "uploaded",
      fileName: params.Key,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error}, { status: 500 });
  }
}