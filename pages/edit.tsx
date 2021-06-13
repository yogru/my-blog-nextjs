import Box from '@material-ui/core/Box'

import Quill from '@/component/editor/quill'
import makeStyles from "@material-ui/core/styles/makeStyles";
import theme from "@/styles/theme";
import {createStyles} from "@material-ui/core/styles";

export interface Props {}

function EditPost(props:Props){
    const classes = useStyles()
    return (
        <Box className={classes.root}>
            <Quill />
        </Box>
    )
}

const useStyles = makeStyles((theme=>createStyles({
    root:{
        backGroundColor:theme.palette.background.paper
    }
})))

export default EditPost