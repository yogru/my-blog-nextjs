import React from 'react'
import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import {PaletteOptions} from "@material-ui/core/styles/createPalette";


declare module '@material-ui/core/styles/createMuiTheme' {
    interface ThemeOptions {
        size:{
            blogHeaderMenuHeight:string
        }
        borderColor:{
            section:string
        }
    }

    interface Theme {
        size:{
            blogHeaderMenuHeight:string
        }
        borderColor:{
            section:string
        }
    }
}

// PaletteOptions 확장, theme.palette 내부를 확장할 때
declare module '@material-ui/core/styles/createPalette' {

    interface TypeBackground {
        // Overrides Mui Types
        section?: string
        item?: string
        menu?:string
    }

}

const palette: PaletteOptions ={
    primary: {
        main: 'rgb(0,0,0)',
    },
    secondary: {
        main: '#19857b',
    },
    error: {
        main: red.A400,
    },
    background: {
        default: 'rgb(255,255,255)',
        section: 'rgb(240,240,240)',
        menu: 'rgb(248,249,250)',
        paper:'rgb(248,249,250)'
    }
}

// Create a theme instance.
const theme = createMuiTheme({
    palette,
    borderColor: {
        section: "#d6d6d6"
    },
    size:{
        blogHeaderMenuHeight: "2rem"
    }
});

export default theme;