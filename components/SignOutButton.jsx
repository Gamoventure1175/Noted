import {useClerk} from '@clerk/clerk-react';
import {useRouter} from 'next/navigation';
import Button from '@mui/material/Button'

function SignOutButton() {
    const {signOut} = useClerk();
    const router = useRouter();

  return (
    <Button onClick={signOut(() => router.push("/"))}>Sign Out</Button>
  )
}

export default SignOutButton
