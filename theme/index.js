'use client'

import {createTheme, responsiveFontSizes, styled} from '@mui/material/styles';
import {Space_Mono, Montserrat} from 'next/font/google';
import Button from '@mui/material/Button';

const spaceMono = Space_Mono({
    weight: ['400', '700'],
    style:['normal','italic'],
    subsets:['latin']
})

const montSerrat = Montserrat({
    weight: ["500", "800"],
    style:["italic", "normal"],
    subsets: ["latin"]
})


export let theme = createTheme({
    palette: {
        primary: {
            main: "#6cdaf3"
        },
        secondary: {
            main: "#ffd085"
        },
        info: {
            main: "#c303f3"
        },
        contrastText: {
            main: "#3c5c87"
        },
        accent: {
            main: "#6fa1ff"
        },
        text: {
            main: "#444444"
        }
    },
    typography: {
        fontFamily: montSerrat.style.fontStyle,
        fontSize: 16,
        
    }
})

theme = responsiveFontSizes(theme);

