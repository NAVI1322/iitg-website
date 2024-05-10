import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const GET = async (req: Request, { params }: { params: { id: string } }) => {
    try {
        const noteID = params.id;
        const note = await prisma.note.findUnique({
            where: {
                id: parseInt(noteID),
            },
        });

        if (note) {
            return NextResponse.json(note);
        } else {
            return NextResponse.json({ message: 'Blog post not found' }, { status: 404 });
        }
    } catch (error) {
        console.error('Error fetching blog post:', error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
};
