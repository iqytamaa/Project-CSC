import { prisma } from '@/lib/prisma'
import { title } from 'process'
import React from 'react'
import Link from 'next/link'

export default async function page() {
    const query = await prisma.todolist.findMany({

    })


return (
    <div>
    {query.map(todo=> (
        <li key={(todo.id)}>{todo.title} {todo.detail}</li>
    ))}
    
    <Link href="/">
    <p> Kembali ke Home</p>
    </Link>

    </div>
)
}