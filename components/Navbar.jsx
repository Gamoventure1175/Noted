'use client'

import { AppBar, Toolbar, IconButton, Typography, Tooltip, Box, Card } from '@mui/material'
import {useRouter} from 'next/navigation'
import NavOptions from './NavOptions';
import DescriptionIcon from '@mui/icons-material/Description';
import { theme } from '@/theme';

// import NavOptions from './NavOptions';


function Navbar() {
  const {push, refresh} = useRouter();
  return (
      <AppBar position="sticky"  sx={{height:"4.8em", marginBottom: 3, justifyContent: 'center', color: theme.palette.text.main}}>
        <Toolbar variant="dense" sx={{justifyContent: 'space-between'}}>
          <Tooltip title="Noted" placement="bottom">
            <Card sx={{m: 0, p: 0, boxSizing: "border-box"}} raised>
              <IconButton
                size='large'
                edge='start'
                sx={{ borderRadius: 2, p: "5px", backgroundColor: "white"}}
                onClick={() => {
                  push("/");
                  refresh();
                }}      
              >
                <Box sx={{ml: 4, mr: 2, display: "flex",flexDirection: "column", alignItems: "start",}}>
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
            </Card>
          </Tooltip>
          <NavOptions />
        </Toolbar>
      </AppBar>
  )
}

export default Navbar
