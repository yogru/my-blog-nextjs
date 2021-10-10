import React from 'react'
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";

import {Post} from "@/model/Post";
import {CssValue} from "@/modules/CssUtils";
import {createStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import LabelChip from "@/components/cell/label-chip";
import AvatarChip from "@/components/cell/avatar-chip";


export type Layout= {
    mainHeaderSideHeight:CssValue
}
const layoutValue:Layout = {
    mainHeaderSideHeight:new CssValue(12,"rem")
}
///////////////////////////////////////////////////

export interface PostViewHeaderProps{
    post:Post
}

const usePostViewHeaderStyles = makeStyles(theme=>createStyles({
    root:{
        backgroundColor:theme.palette.background.section,
    },
    titleTypography:{
        fontWeight:700,
        marginTop:layoutValue.mainHeaderSideHeight.get(n=>Number(0.2*n))
    }
}))


function PostViewHeader(props:PostViewHeaderProps){
    const classes = usePostViewHeaderStyles()
    const labels = [...props.post.tags]
    return (
        <Box className={classes.root}>
            <Typography className={classes.titleTypography} variant="h4" align={"center"}>
                {props.post.title}
            </Typography>

            <LabelChip labels={labels}/>
            <AvatarChip user={props.post.editor} createDate={props.post.createAt} />
        </Box>
    )
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


interface PostViewMainProps {
    post:Post
}

const usePostViewMainStyles = makeStyles(theme=>createStyles({
    root:{
        display:"flex",
        flexDirection:"column",
        backgroundColor:theme.palette.background.paper,
        minHeight:`calc(100vh - ${layoutValue.mainHeaderSideHeight.get()} - ${theme.size.blogHeaderMenuHeight})`
    }
}))


function PostViewMainSide(props:PostViewMainProps){
    const classes = usePostViewMainStyles()

    return (
        <Box className={classes.root}>
            {/*<Box>*/}
            {/*    <TocSection/>*/}
            {/*</Box>*/}

            <Box>
                <Box>
                    <div dangerouslySetInnerHTML={{__html:props.post.body}}  />
                </Box>
            </Box>

            <Box mt="auto">
                <Box>
                    footer...
                    이거는 사람 얼굴 띄우는게 나을 듯..?
                </Box>
            </Box>
        </Box>
    )
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export interface PostViewProps {
    post: Post
}


const usePostViewStyles = makeStyles(theme => ({
    root:{
        display:"flex",
        flexDirection:"column",
    },
    menu:{
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
    bodyColumnOne:{
        minHeight: layoutValue.mainHeaderSideHeight.get(),
        maxHeight: layoutValue.mainHeaderSideHeight.get(),
        borderTop:`1px solid ${theme.borderColor.section}`,
        borderBottom:`1px solid ${theme.borderColor.section}`,
        backgroundColor:theme.palette.background.section
    },
    bodyColumnTwo: {
        display: "flex",
    },
    mainContainer:{
        width:"100%",
        padding:"5% 15%",
        backgroundColor:theme.palette.background.paper
    }
}))


export default function PostView(props:PostViewProps){
    const classes = usePostViewStyles()

    return (
        <Box className={classes.root}>

            {/*<Box className={classes.menuContainer}>*/}
            {/*    {props.BlogMenu}*/}
            {/*</Box>*/}

            <Box className={classes.body} >
                <Box className={classes.bodyColumnOne}>
                    <PostViewHeader post={props.post} />
                </Box>

                <Box className={classes.bodyColumnTwo}>
                    <Box className={classes.mainContainer}>
                        <PostViewMainSide post={props.post} />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}