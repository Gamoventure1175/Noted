'use client'

import React from 'react';

import { AppBar, Toolbar, IconButton, Typography, Tooltip } from '@mui/material'
import {useRouter} from 'next/navigation'
import NavOptions from './NavOptions';
import DescriptionIcon from '@mui/icons-material/Description';
// import NavOptions from './NavOptions';


function Navbar() {
  const {push} = useRouter();
  return (
      <AppBar position="static"  sx={{height:"4.8em", marginBottom: 3, justifyContent: 'center'}}>
        <Toolbar variant="dense" sx={{justifyContent: 'space-between'}}>
          <IconButton
            size='large'
            edge='start'
            disableRipple
            onClick={() => {push('/')}}      
          >
            <DescriptionIcon 
              sx={{fontSize: 45}}
            />
            <Tooltip title='Noted' placement='right-end'>
              <Typography 
                variant='h4'
              >
                Noted
              </Typography>
            </Tooltip>
          </IconButton>

          <NavOptions />
        </Toolbar>
      </AppBar>
  )
}

export default Navbar
