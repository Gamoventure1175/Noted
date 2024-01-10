import prisma from '../libs/prisma'

export async function createNote(data){

        try {
            const {userId, title, body, firstName, lastName} = data
            return await prisma.note.create({
                data: {
                    title: title,
                    body: body,
                    author: {
                        connectOrCreate: {
                            where: {
                                id: userId
                            }, 
                            create: {
                                id: userId,
                                firstName: firstName,
                                lastName: lastName
                            }
                        }
                    }
                }
        })
        } catch (error) {
            return(error)
        }
    
}

export async function updateNote(data) {
    try {
        const {userId, noteId, newTitle, newBody} = data
        return await prisma.user.update({
            where: {id: userId},
            data: {
                notes: {
                    update: {
                        where: {
                            id: noteId
                        },
                        data: {
                            title: newTitle,
                            body: newBody
                        }
                    }
                }
            },
            include: {
                notes: true
            }
        })
    } catch (error) {
        return error
    }
}

export async function deleteNote(data) {
    try {
        const {userId, noteId} = data
        return await prisma.user.update({
            where: {
                id: userId
            },
            data: {
                notes: {
                    deleteMany: [{id: noteId}]
                }
            },
            include: {
                notes: true
            }
        })
    } catch (error) {
        return error
    }
}

export async function getNotes(userId) {
    try {
        const notes =  await prisma.note.findMany({
            where: {
                authorId: userId
            },
            include: {
                author: true
            }
        })
        return notes
    } catch (error) {
        console.log(error)
        return error
    }
}

export async function getNote(noteId) {
    try {
        const note = await prisma.note.findUnique({
            where: {
                id: noteId
            }
        })
        return note
    } catch (error) {
        
    }
}