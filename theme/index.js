'use client'

import {createTheme, responsiveFontSizes, styled} from '@mui/material/styles';
import {Space_Mono, Montserrat} from 'next/font/google';
import Container from '@mui/material/Container';

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
        }
    },
    typography: {
        fontFamily: montSerrat.style.fontFamily,
        fontSize: 16
    }
})

theme = responsiveFontSizes(theme);


