'use client'

import React from 'react'
import {useUser, UserButton, SignUpButton} from '@clerk/nextjs'
import {Button, Box, Typography} from '@mui/material'


function  NavOptions() {
    const {isLoaded, isSignedIn} = useUser()

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
            <UserButton appearance={{elements: {userButtonAvatarBox: {width:40, height: 40, }}}} />
        </Box>
    )
}

export default NavOptions
