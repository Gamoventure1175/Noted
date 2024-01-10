import { getNotes } from '@/models/Notes'
import {NextResponse} from 'next/server'

export async function GET(request, {params}) {
    try {
        console.log(params)
        const {userId} = params
        const notes = await getNotes(userId)
        return NextResponse.json(notes)
    } catch (error) {
        console.log(error)
        return NextResponse.json({message: "Could not get notes"})
    }
}