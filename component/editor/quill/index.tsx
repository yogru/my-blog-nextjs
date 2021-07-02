import {useCallback, useState} from 'react'
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core/styles";


import Body from './body'
import EditorBar from "./editorBar";
import TitleInput from "./titleInput";
import body from "./body";

export interface Props{
    onSave?:(title:string,body:string)=>Promise<void>
    onBack?:()=>void
}


function Quill(props:Props){
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
        console.log("back...z")
        props.onBack?.()
    },[props.onBack])


    return (
        <Box className={classes.root}>
            <Box className={classes.title} >
                <TitleInput onChangeTitle={onChangeTitle} />
            </Box>
            <Box className={classes.body}>
                <Body onChangeBodyText={onChangeBodyText} />
            </Box>
            <Box>
                <EditorBar onClickSave={onSave} onClickBack={onBack} />
            </Box>
        </Box>
    )
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
        minHeight: "80%"
    }
}))


export default Quill