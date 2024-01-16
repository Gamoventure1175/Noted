'use client'

import { AppBar, Toolbar, IconButton, Typography, Tooltip } from '@mui/material'
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
              sx={{alignItems: "center", borderRadius: 2}}
              onClick={() => {
                push("/");
                refresh();
              }}      
            >
              <Typography 
                variant='h4'
              >
                Noted
              </Typography>
              <DescriptionIcon 
                sx={{fontSize: 40}}
              />
            </IconButton>
          </Tooltip>
          <NavOptions />
        </Toolbar>
      </AppBar>
  )
}

export default Navbar
