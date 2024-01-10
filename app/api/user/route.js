import prisma from '@/libs/prisma'
import { createUser } from '@/models/Users'
import {NextResponse} from 'next/server'
    

export async function POST(request) {
    try {
        const {userId, firstName, lastName} = await request.json()
        const data = {id: userId, firstName: firstName, lastName: lastName}
        const user = await createUser(data)
        return NextResponse.json(user)
    } catch (error) {
        console.log(error)
        return NextResponse.json({message: "Could not create user"})
    }
}

export async function GET(request) {
    console.log("it is not going where you want it to go")
    const users = await prisma.user.findMany()
    return NextResponse.json(users)
}