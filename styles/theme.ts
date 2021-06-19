import React from 'react'
import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';


// PaletteOptions 확장, theme.palette 내부를 확장할 때
declare module '@material-ui/core/styles/createPalette' {
    interface TypeBackground {
        // Overrides Mui Types
        section?: string
        item?: string
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
            section: 'rgb(240,240,240)'
        },
    },
});

export default theme;