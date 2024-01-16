import {useClerk, SignOutButton} from '@clerk/nextjs'
import {useRouter} from 'next/navigation'
import Button from '@mui/material/Button'

function SignOut() {

    const {router} = useRouter();
    const {signOut} = useClerk();
    const signOutAction = () => {
        signOut(router.push("/"))
    }

  return (
    <SignOutButton>
        <Button variant="contained">
            Sign Out
        </Button>
    </SignOutButton>
  )
}

export default SignOut
