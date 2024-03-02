import Note from '@/components/Note'
import {prisma} from '../lib/prisma'
import React from 'react'

const NotesList: React.FC = async() => {

    const res = await prisma.note.findMany()
    console.log(res)

    return(
    <div className="flex gap-2 flex-col">
        {Array.from(res).map((note) => (
            <Note noteId={note.id} title={note.title} body={note.body}/>
        ) )}
    </div>
    )
}

export default NotesList;