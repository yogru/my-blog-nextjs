import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core/styles";

import BlogMenu from "@/component/blog-header-menu";
import MainHeaderSide from "./main-header-side"
import MainSide from "./main-side"
import PostModel from "@/model/PostModel";
import layoutValue ,{Layout} from "./layout";


export interface Props {
    post: PostModel
}


function PostView(props:Props){
    const classes = useStyles(layoutValue)

    return (
        <Box className={classes.root}>

            <Box className={classes.menuContainer}>
                <BlogMenu  className={classes.menu} position="fixed" />
            </Box>

            <Box className={classes.body} >
                <Box className={classes.bodyColumnOne}>
                    <MainHeaderSide post={props.post} layoutConst={layoutValue} />
                </Box>

                <Box className={classes.bodyColumnTwo}>
                    <Box className={classes.mainContainer}>
                      <MainSide post={props.post} layoutConst={layoutValue} />
                    </Box>
                </Box>

            </Box>
        </Box>

    )
}

const useStyles = makeStyles(theme => createStyles({
    root:{
        display:"flex",
        flexDirection:"column",
    },
    menu:{
        borderBottom:"1px solid rgb(248,249,250)",
        backgroundColor:theme.palette.background.menu
    },
    menuContainer:{
        marginBottom:theme.size.blogHeaderMenuHeight,
    },
    body:{
        display: 'flex',
        flexDirection: "column",
        minHeight: `calc(100vh - ${theme.size.blogHeaderMenuHeight})`
    },
    bodyColumnOne:(l:Layout)=>({
        minHeight: l.mainHeaderSideHeight.get(),
        maxHeight: l.mainHeaderSideHeight.get(),
        borderTop:`1px solid ${theme.borderColor.section}`,
        borderBottom:`1px solid ${theme.borderColor.section}`,
        backgroundColor:theme.palette.background.section
    }),
    bodyColumnTwo: {
        display: "flex",
    },
    mainContainer:{
        width:"100%",
        padding:"5%",
        backgroundColor:theme.palette.background.paper
    }
}))


export default PostView