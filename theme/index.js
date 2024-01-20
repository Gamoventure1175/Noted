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
            main: "#92ceff"
        },
        secondary: {
            main: "#ffc392"
        },
        info: {
            main: "#c303f3"
        },
        contrastText: {
            main: "#3c5c87"
        }
    },
    typography: {
        fontFamily: montSerrat.style.fontStyle,
        fontSize: 16
    }
})

theme = responsiveFontSizes(theme);

