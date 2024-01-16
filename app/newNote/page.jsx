'use client'
import { useState } from "react"
import { useAuth } from "@clerk/nextjs"
import {Box, TextField, Button} from '@mui/material'
import { useRouter } from "next/navigation"

function page() {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const router = useRouter();
    const {userId} = useAuth()
    
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        const firstName = ""
        const lastName = ""


        try {
            const res = await fetch(`http://localhost:3000/api/note`, {
                method: "POST",
                cache: "no-store",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({userId, title, body, firstName, lastName})
            })

            if (!res.ok) {
                throw new Error("Could not create new note")
            }

            router.push("/");
            router.refresh();

        } catch (error) {
            console.log(error)
        }
        

    }

  return (
    <form onSubmit={handleSubmit}>
        <Box 
        display={'flex'}
        flexDirection={'column'}
        gap={{sm: 3, md: 6}}
        width={'100%'}
        >
            
            <TextField 
                type='text'
                variant='standard'
                label="Title"
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <TextField 
                multiline
                type='text'
                variant='standard'
                label="Note"
                onChange={(e) => setBody(e.target.value)}
                required
            />
            <Button
                aria-label='submit'
                type='submit'
                variant='outlined'
            >
                Create Note
            </Button>
        </Box>
    </form>
  )
}

export default page
