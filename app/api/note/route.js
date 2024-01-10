import { createNote } from '@/models/Notes'
import {NextResponse} from 'next/server'

export async function POST(request) {
    try {
        const {userId, title, body, firstName, lastName} = await request.json()
        const data = {userId: userId, title: title, body: body, firstName: firstName, lastName: lastName}
        const createdNote = await createNote(data)
        return NextResponse.json(createdNote)
    } catch (error) {
        return NextResponse.json({message: "Could not create note"})
    }    
}
