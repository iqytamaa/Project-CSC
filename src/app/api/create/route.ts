import { NextRequest } from "next/server";
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest){
    const body = await req.json();
    const {title,detail} = body;
    await prisma.todolist.create({
        data: {
            title,
            detail,
        }
    })
}