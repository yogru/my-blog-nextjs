import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core/styles";


import Quill from '@/component/editor/quill';
import EditorBar from '@/component/editor/editor-bar';
import TitleInput from "@/component/editor/title-input";
import {useCallback, useState} from "react";
import Box from "@material-ui/core/Box";
import Body from "@/component/quill";

export interface Props {

}


function PostCreator(props:Props){
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
                <TitleInput onChangeTitle={onChangeTitle} />
            </Box>
            <Box className={classes.body}>
                <Body onChangeBodyText={onChangeBodyText} />
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
        padding:"1rem 2rem"
    }
}))


export default PostCreator