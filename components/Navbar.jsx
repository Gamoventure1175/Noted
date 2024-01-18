'use client'

import { AppBar, Toolbar, IconButton, Typography, Tooltip, Box } from '@mui/material'
import {useRouter} from 'next/navigation'
import NavOptions from './NavOptions';
import DescriptionIcon from '@mui/icons-material/Description';

// import NavOptions from './NavOptions';


function Navbar() {
  const {push, refresh} = useRouter();
  return (
      <AppBar position="sticky"  sx={{height:"4.8em", marginBottom: 3, justifyContent: 'center'}}>
        <Toolbar variant="dense" sx={{justifyContent: 'space-between'}}>
          <Tooltip title="Noted" placement="bottom">
            <IconButton

              size='large'
              edge='start'
              sx={{alignItems: "center", borderRadius: 2, color: "#3c5c87", p: "5px", backgroundColor: "white"}}
              onClick={() => {
                push("/");
                refresh();
              }}      
            >
              <Box sx={{m: 0 ,mr: 2, display: "flex",flexDirection: "column", alignItems: "start",}}>
                <Typography 
                  variant="h4"
                  sx={{m:0}}
                >
                  Noted
                </Typography>
                <Typography variant="subtitle2" sx={{m:0, fontSize: ".4em"}}>
                  Made By Gamoventure
                </Typography>
              </Box>
            </IconButton>
          </Tooltip>
          <NavOptions />
        </Toolbar>
      </AppBar>
  )
}

export default Navbar
