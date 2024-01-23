'use client'

import React from 'react'
import {useUser} from '@clerk/nextjs'
import UserProfileButton from './CustomUserButton'
import dynamic from 'next/dynamic'

const SignUp = dynamic(() => import("./SignUpButton"))
const UserProfile = dynamic(() => import("./CustomUserButton"))


function  NavOptions() {
    const {isLoaded, isSignedIn} = useUser()

    if (!isLoaded || !isSignedIn) {
        return(
            <SignUp />
        )
    }

    return(
        <UserProfile />
    )
}

export default NavOptions
