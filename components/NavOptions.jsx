'use client'

import React from 'react'
import {useAuth, UserButton, SignUpButton} from '@clerk/nextjs'
import {Button, Box, IconButton} from '@mui/material'
import NoteAddIcon from '@mui/icons-material/NoteAdd';

function  NavOptions() {
    const {isLoaded, isSignedIn} = useAuth()

    if (!isLoaded || !isSignedIn) {
        return(
            <Box>
                <SignUpButton mode='modal'>
                    <Button variant='contained'>
                        Sign Up
                    </Button>
                </SignUpButton>
            </Box>
        )
    }

    return(
        <Box 
            sx={{display: 'flex', alignItems:'center', gap: 1}}
        >
            <IconButton href='/newPost'>
                <NoteAddIcon sx={{fontSize: '1.5em'}}/>
            </IconButton>
            <UserButton appearance={{elements: {userButtonAvatarBox: {width:40, height: 40}}}} />
        </Box>
    )
}

export default NavOptions
