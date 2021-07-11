import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core/styles";

import BlogMenu from "@/component/blog-header-menu";

export interface Props {

}


function PostView(props:Props){
    const classes = useStyles()

    return (
        <Box className={classes.root}>

            <BlogMenu  className={classes.menu} />

            <Box className={classes.body} >
                Body.
            </Box>
        </Box>

    )
}

const useStyles = makeStyles(theme => createStyles({
    root:{
        display:"flex",
        flexDirection:"column",
        backgroundColor:"black"
    },
    menu:{
        backgroundColor: "gray",
    },
    body:{
        minHeight: "calc(200vh - 0rem)"
    },
}))


export default PostView