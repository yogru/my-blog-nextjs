import React, {useCallback} from 'react'
import Box from '@material-ui/core/Box'
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core/styles";


export interface Props {
 onChangeBodyText?:(text:string)=>void
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
            <ReactQuill value={text} onChange={onChange} />
        </Box>
    )
}

const useStyles = makeStyles((theme)=>createStyles({
    root:{
        backgroundColor:theme.palette.background.paper
    },
    quill:{}
}));


export default Quill