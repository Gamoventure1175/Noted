import prisma from '../libs/prisma'

//auth() and currentUser() are only supported in App Router

export async function getCurrentUser(userId) {
    try {
        return await prisma.user.findUnique({where: {id: userId}})
    } catch (error) {
        return error
    }
}

export async function createUser(data) {
    try {
        return await prisma.user.create({data})
    } catch (error) {
        return error
    }
}