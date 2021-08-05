import Box from '@material-ui/core/Box'
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core/styles";
import React from "react";

export interface Props {
    BlogMenu:any
}

function UserHome(props:Props){
    const classes = useStyles()

    return (
        <Box className={classes.root}>
            <Box className={classes.menuContainer}>
                {props.BlogMenu}
            </Box>


        </Box>
    )


}

export default UserHome

const useStyles = makeStyles(t=>createStyles({
    root:{
        display:'flex',
        flexDirection:'column',
        backgroundColor:t.palette.background.paper
    },
    menuContainer:{
        marginBottom:t.size.blogHeaderMenuHeight,
    },
}))

