import { deleteNote, getNote, updateNote } from '@/models/Notes'
import {NextResponse} from 'next/server'

export async function PUT(request, {params}) {
    try {
        const {noteId} = params
        const {userId, newTitle, newBody} = await request.json()
        const data = {userId: userId, noteId: noteId, newTitle: newTitle, newBody: newBody}
        const updatedNote = await updateNote(data)
        return NextResponse.json(updatedNote)
    } catch (error) {
        return NextResponse.json({message: 'Could not update post'})
    }
}


export async function DELETE(request, {params}) {
    try {
        const {userId} = await request.json()
        const {noteId} = params
        const data = {userId: userId, noteId: noteId}
        await deleteNote(data)
        return NextResponse.json({message: 'Successfully deleted note'})
    } catch (error) {
        return NextResponse.json({message: "Could not delete note"})
    }
}


export async function GET(request, {params}) {
    try {
        const {noteId} = params
        const note = await getNote(noteId);
        return NextResponse.json(note)
    } catch (error) {
        return NextResponse.json({message: error})
    }
}