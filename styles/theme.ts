import React from 'react'
import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';



declare module '@material-ui/core/styles/createMuiTheme' {
    interface ThemeOptions {
        size:{
            blogHeaderMenuHeight:string
        }
    }

    interface Theme {
        size:{
            blogHeaderMenuHeight:string
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

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
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
            menu: 'rgb(248,249,250)'
        },
    },
    size:{
        blogHeaderMenuHeight: "4rem"
    }
});

export default theme;