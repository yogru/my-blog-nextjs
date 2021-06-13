import Body from './body'
import EditorBar from "./editorBar";
import TitleInput from "./titleInput";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core/styles";

export interface Props{}


function Quill(props:Props){
    const classes = useStyles()

    return (
        <Box className={classes.root}>
            <Box className={classes.title} >
                <TitleInput />
            </Box>
            <Box className={classes.body}>
                <Body />
            </Box>
            <Box>
                <EditorBar />
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