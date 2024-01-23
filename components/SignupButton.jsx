import Box from '@mui/material/Box'
import {SignUpButton} from '@clerk/nextjs'
import Button from '@mui/material/Button'

function SignupButton() {
  return (
    <Box>
        <SignUpButton mode='modal'>
            <Button variant='contained'>
                Sign Up
            </Button>
        </SignUpButton>
    </Box>
  )
}

export default SignupButton
