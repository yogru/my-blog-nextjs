import React from 'react'
import Box from '@material-ui/core/Box'
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core/styles";


export interface Props {

}

function Quill(props:Props) {
    const [text, setText] = React.useState<string>('')
    const classes = useStyles()
    const ReactQuill = typeof window === 'object' ? require("react-quill") : () => false;

    function handleEditor(value: string) {
        setText(value)
    }

    return (
        <Box className={classes.root}>
            <ReactQuill value={text} onChange={handleEditor} />
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