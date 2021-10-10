import {Post} from "@/model/Post";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography"

import layoutValue, {Layout} from "../layout";
import TagChip from "./tag-chip";
import WriterChip from "./writer-chip";

export interface Props {
    post:Post
    layoutConst:Layout
}

function MainHeaderSide(props:Props){
    const classes = useStyles(props.layoutConst)
    const labels = [...props.post.tags]
    return (
        <Box className={classes.root}>

            <Typography className={classes.titleTypography} variant="h4" align={"center"}>
                {props.post.title}
            </Typography>

            <TagChip labels={labels}/>
            <WriterChip user={props.post.editor} createDate={props.post.createAt} />
        </Box>
    )
}

const useStyles = makeStyles(theme=>createStyles({
   root:{
       backgroundColor:theme.palette.background.section,
    },
    titleTypography:(l:Layout)=>({
        fontWeight:700,
        marginTop:l.mainHeaderSideHeight.get(n=>Number(0.2*n))
    }),

}))


export default  MainHeaderSide