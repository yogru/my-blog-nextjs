import Box from '@material-ui/core/Box'
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core/styles";
import React from "react";

import UserIntroducer from "@/component/user-introducer";
import {Divider} from "@material-ui/core";
import ChipList from "@/component/chip-list";
import PostCardList from "@/component/post-card-list"
import UserModel from "@/model/UserModel";
import {PostSummary} from "@/model/Post";

export interface Props {
    BlogMenu:any
    user:UserModel
    userTagsList?:string []
    postList?: PostSummary []
    onEndScroll:()=>Promise<void>
    onChangeTag:(tag:string)=>void
}

function UserHome(props:Props){
    const classes = useStyles()

    return (
        <Box className={classes.root}>
            <Box className={classes.menuContainer}>
                {props.BlogMenu}
            </Box>

            <Divider />

            <Box className={classes.userIntroducer}>
               <UserIntroducer user={props.user} />
            </Box>

            <Box mt={1}>
                <ChipList chips={props.userTagsList} onChangeChip={props.onChangeTag} />
            </Box>

            <Box className={classes.postCardList}>
                <PostCardList posts={props.postList} onEndScroll={props.onEndScroll} />
            </Box>
        </Box>
    )


}

export default UserHome

const useStyles = makeStyles(t=>createStyles({
    root:{
        display:'flex',
        flexDirection:'column',
        backgroundColor:t.palette.background.default
    },
    menuContainer:{
        marginBottom:t.size.blogHeaderMenuHeight,
    },
    userIntroducer:{
        backgroundColor: t.palette.background.default,
        marginTop:"1rem",
        minHeight:'14rem',
        maxHeight:"14rem",
        // border:"1px solid black",
        padding:"0.5rem 2rem"
    },
    postCardList:{
        marginTop:"12px",

    }
}))

