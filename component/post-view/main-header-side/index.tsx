import PostModel from "@/model/PostModel";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography"

import layoutValue, {Layout} from "../layout";
import TagChip from "./tag-chip";
import WriterChip from "./writer-chip";

export interface Props {
    post:PostModel
    layoutConst:Layout
}

function MainHeaderSide(props:Props){
    const classes = useStyles(props.layoutConst)
    const labels = [...props.post.tag, ...props.post.tag,  ...props.post.tag ,  ...props.post.tag]
    return (
        <Box className={classes.root}>

            <Typography className={classes.titleTypography} variant="h4" align={"center"}>
                {props.post.title}
            </Typography>

            <TagChip labels={labels}/>
            <WriterChip user={props.post.editors[0]} createDate={props.post.createAt} />
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