import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core/styles";

import BlogMenu from "@/component/blog-header-menu";
import MainHeaderSide from "./main-header-side"
import MainSide from "./main-side"
import PostModel from "@/model/PostModel";

export type LayoutConst= {
    MainHeaderSideHeight:string
}


export interface Props {
    post: PostModel
}

const layoutConst:LayoutConst ={
    MainHeaderSideHeight:"12rem"
}


function PostView(props:Props){
    const classes = useStyles(layoutConst)

    return (
        <Box className={classes.root}>

            <Box className={classes.menuContainer}>
                <BlogMenu  className={classes.menu} position="fixed" />
            </Box>

            <Box className={classes.body} >
                <Box className={classes.bodyColumnOne}>
                    <MainHeaderSide post={props.post} />
                </Box>

                <Box className={classes.bodyColumnTwo}>
                    <Box className={classes.leftContainer}>
                        Left..
                    </Box>
                    <Box className={classes.mainContainer}>
                      <MainSide post={props.post} layoutConst={layoutConst} />
                    </Box>
                    <Box className={classes.rightContainer}>
                        right
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
        backgroundColor:theme.palette.background.section
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
    bodyColumnOne:(l:LayoutConst)=>({
        minHeight: l.MainHeaderSideHeight,
        maxHeight: l.MainHeaderSideHeight,
        borderTop:`1px solid ${theme.borderColor.section}`,
        borderBottom:`1px solid ${theme.borderColor.section}`,
    }),
    bodyColumnTwo: {
        display: "flex"
    },
    leftContainer:{
       backgroundColor:"rgb(170,170,170)",
       width:"10%"
    },
    mainContainer:{
        backgroundColor:"rgb(130,130,130)",
        width:"80%",
    },
    rightContainer:{
        backgroundColor:"rgb(170,170,170)",
        width:"10%"
    }

}))


export default PostView