'use server'

import {auth} from '@clerk/nextjs'

export async function authenticationChecker(): Promise<string|null> {
    const {sessionId} =  auth()
    return sessionId
}

export async function getUserId(): Promise<string|null> {
    const session = authenticationChecker();
    let userIdForDb: string | null = null

    if (!session || session === null) {
        return userIdForDb
    }

    const {userId} = auth();

    userIdForDb = userId;

    return userIdForDb
}