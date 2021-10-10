import React, {ChangeEvent, useCallback, useState} from 'react'
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles, Theme} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CallMissedIcon from "@material-ui/icons/CallMissed";
import CheckIcon from "@material-ui/icons/Check";
import TextField from "@material-ui/core/TextField";

import QuillWrapper from '@/components/cell/quill'

interface EditorBarProps {
    onClickSave?: ()=> void
    onClickBack?:()=>void
}

const useEditorBarStyles = makeStyles((theme: Theme) =>
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

function EditorBar(props:EditorBarProps){
    const classes = useEditorBarStyles()
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
interface EditTitleProps {
    onChangeTitle?: (string)=>void
}
const useEditTitleStyles = makeStyles(theme=>createStyles({
    root:{
        // backgroundColor:theme.palette.background.paper,
        marginTop:"5rem",
        paddingLeft:"2rem",
        paddingRight:"2rem",
        paddingTop:'1rem',

    }
}))

function EditTitle(props:EditTitleProps){
    const classes = useEditTitleStyles()

    const onChangeTextArea = useCallback((e:ChangeEvent<HTMLTextAreaElement>)=>{
        e.preventDefault()
        props.onChangeTitle?.(e.target.value)
    },[props.onChangeTitle])

    return (
        <Box className={classes.root}>
            <TextField fullWidth id="outlined-basic" label="제목" variant="outlined"
                       onChange={ onChangeTextArea }
                       placeholder="제목을 입력 해주세요" />
        </Box>
    )
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export interface Props{
    onSave?:(title:string,body:string)=>Promise<void>
    onBack?:()=>void
}

const useStyles = makeStyles(theme=>createStyles({
    root:{
        display:'flex',
        flexDirection:"column"
    },
    title:{
        minHeight: "1.5rem"
    },
    body:{
        padding:"1rem 2rem"
    }
}))

export default function PostEdit(props:Props){
    const classes = useStyles()
    const [bodyText , setBodyText] = useState<string>()
    const [titleText, setTitleText] = useState<string>()

    const onChangeTitle = useCallback((title:string)=>{
        setTitleText(title)
    },[])

    const onChangeBodyText = useCallback((bodyText:string)=>{
        setBodyText(bodyText)
    },[])

    const onSave= useCallback(async ()=>{
        await props.onSave?.(titleText,bodyText)
    },[titleText,bodyText])

    const onBack = useCallback(()=>{
        props.onBack?.()
    },[props.onBack])


    return (
        <Box className={classes.root}>
            <Box>
                <EditorBar onClickSave={onSave} onClickBack={onBack} />
            </Box>

            <Box className={classes.title} >
                <EditTitle onChangeTitle={onChangeTitle} />
            </Box>
            <Box className={classes.body}>
                <QuillWrapper onChangeBodyText={onChangeBodyText} />
            </Box>
        </Box>
    )
}
