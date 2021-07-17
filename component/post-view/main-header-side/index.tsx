import PostModel from "@/model/PostModel";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

export interface Props {
  post:PostModel
}

function MainHeaderSide(props:Props){
    const classes = useStyles()

    return (
        <Box className={classes.root}>

            {props.post.title}
            {props.post.title}
        </Box>
    )

}

const useStyles = makeStyles(theme=>createStyles({
   root:{
       backgroundColor:theme.palette.background.section,

   }

}))


export default  MainHeaderSide