import React from 'react'
import NotesList from '@/components/NotesList';
import  Grid  from '@mui/material/Grid'
import {Box, Typography} from '@mui/material'
import { getCurrentUser } from '@/models/Users';
import { currentUser } from '@clerk/nextjs';

const createOrGetUser = async() => {

    try {
        const user = await currentUser(); 
        const existingUser = await getCurrentUser(user.id)
        
        if (!existingUser) {
        const res = await fetch("http://localhost:3000/api/user",
        {
            method: "POST", 
            cache: "no-store",
            body: JSON.stringify({userId: user.id, firstName: user.firstName, lastName: user.lastName})
        })

        if (!res.ok) {
            throw new Error("Could not create new user")
        }
        } else {
            console.log("User already exists")
        }
    } catch (error) {
        console.log("Error trying to create user: ", error)
    }

} 

export default async function Notes() {
    const user = await currentUser()
    console.log(user)
    
    if (!user) {
        return(
            <div className=" text-center">
                Log in to view content
            </div>
        )
    }
    await createOrGetUser()
    return(
        <NotesList />
    )
    
}