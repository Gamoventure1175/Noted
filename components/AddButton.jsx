'use client'

import Card from '@mui/material/Card'
import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add';
import {styled} from '@mui/material/styles';
import { theme } from '@/theme';
import {useRouter} from 'next/navigation'

const MyIconButton = styled(AddIcon) (({theme})=> ({
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    borderRadius: "50%",
    fontSize: "3.3em",
    padding: "2px",
    boxSizing: 'border-box'
}))

const AddButton = () => {
    const {push} = useRouter();

  return (
    <Card sx={{zIndex: 99, position: 'fixed', bottom: 30, right: 30, borderRadius: "50%"}} raised theme={theme}>
        <IconButton onClick={() => push("/newNote")}>
            <MyIconButton theme={theme} />
        </IconButton>
    </Card>
  )
}

export default AddButton

{/* <Card sx={{zIndex: 99, position: 'fixed', bottom: 30, right: 30, borderRadius: "50%"}} raised> */}