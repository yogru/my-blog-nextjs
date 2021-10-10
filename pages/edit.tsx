import Box from '@material-ui/core/Box'
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core/styles";

import PostEdit from '@/components/organ/post-edit'

export interface Props {}

function EditPostPage(props:Props){
    const classes = useStyles()
    return (
        <Box className={classes.root}>
           <PostEdit />
        </Box>
    )
}

const useStyles = makeStyles((theme=>createStyles({
    root:{
        backGroundColor:theme.palette.background.paper
    }
})))

export default EditPostPage