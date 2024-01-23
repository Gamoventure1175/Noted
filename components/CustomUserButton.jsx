import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import {useRouter} from 'next/navigation'
import {useClerk} from '@clerk/clerk-react'

function CustomUserButton() {
  const {signOut, user} = useClerk()
  const {push} = useRouter()
  const signOutFunction = () => {
    signOut(()=> push('/'))
  }

  return (
    <Box sx={{display: "flex", gap: "1em", flexDirection: "row", alignItems: "center"}}>
      <Card sx={{borderRadius: "50%", overflow: "hidden"}} raised>
        <Box 
          component="img"
          src={user.imageUrl}
          width={50}
          height={50}
        />
      </Card>
      <Card raised>
        <Box>
          <Button sx={{color: "#3c5c87", fontWeight: "500"}} onClick={signOutFunction}>Sign Out</Button>
        </Box>
      </Card>
    </Box>
  )
}

export default CustomUserButton
