import { NextRequest } from "next/server";
import { prisma } from '@/lib/prisma';

export async function POST(req){
    const body = await req.json();
    const {id} = body;
    await prisma.todolist.delete({
        where: {
            id
        }

    })
}