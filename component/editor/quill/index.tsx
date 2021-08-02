import React, {useCallback} from 'react'
import Box from '@material-ui/core/Box'
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core/styles";


export interface Props {
    onChangeBodyText?:(text:string)=>void
}

const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
]

const modules = {
    toolbar: [
        // [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
        [{size: []}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'},
            {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image', 'video'],
        ['clean']
    ],
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
    }
}

function Quill(props:Props) {
    const [text, setText] = React.useState<string>('')
    const classes = useStyles()
    const ReactQuill = typeof window === 'object' ? require("react-quill") : () => false;

    const onChange = useCallback((value:string)=>{
        setText(value)
        props.onChangeBodyText?.(value)
    },[])


    return (
        <Box className={classes.root}>
            <ReactQuill
                style={{minHeight:'500px' }}
                theme={"snow"}
                        value={text}
                        onChange={onChange}
                        formats={formats}
                        modules={modules}
            />
        </Box>
    )
}

const useStyles = makeStyles((theme)=>createStyles({
    root:{
        // backgroundColor:theme.palette.background.paper
    }
}));


export default Quill