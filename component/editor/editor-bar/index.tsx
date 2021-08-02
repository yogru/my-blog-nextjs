import React, {useCallback} from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CheckIcon from '@material-ui/icons/Check';
import CallMissedIcon from '@material-ui/icons/CallMissed';


export interface Props {
    onClickSave?: ()=> void
    onClickBack?:()=>void
}


function EditorBar(props:Props){
    const classes = useStyles()
    const onClickSave = useCallback(()=>{
        props.onClickSave?.()
    },[props.onClickSave])

    const onClickBack = useCallback(()=>{
        props.onClickBack?.()
    },[props.onClickBack])


    return (
        <AppBar  position="fixed" className={classes.appBar}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={onClickBack}>
                    <CallMissedIcon />
                </IconButton>
                <div className={classes.grow} />

                <IconButton edge="end" color="inherit" onClick={onClickSave}>
                    <CheckIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        text: {
            padding: theme.spacing(2, 2, 0),
        },
        paper: {
            paddingBottom: 50,
        },
        list: {
            marginBottom: theme.spacing(2),
        },
        subheader: {
            backgroundColor: theme.palette.background.paper,
        },
        appBar: {
            // top: 'auto',
            // bottom: 0,
        },
        grow: {
            flexGrow: 1,
        },
        fabButton: {
            position: 'absolute',
            zIndex: 1,
            top: -30,
            left: 0,
            right: 0,
            margin: '0 auto',
        },
    }),
);

export default EditorBar