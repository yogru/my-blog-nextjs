import Box from "@material-ui/core/Box"
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core/styles";


import TocSection from './toc-section'
import ReplySection from './reply-section'
import ContentsSection from "./contents-section";
import FooterSection from "./footer-section";
import {LayoutConst} from "@/component/post-view";
import PostModel from "@/model/PostModel";

export interface Props {
    post:PostModel
    layoutConst:LayoutConst
}


function MainSide(props:Props){
    const classes = useStyles(props.layoutConst)

    return (
        <Box className={classes.root}>
            <Box>
                <TocSection/>
            </Box>

            <Box>
                <ContentsSection contents={props.post?.body} />
            </Box>

            <Box mt="auto">
                <FooterSection />
            </Box>

            <Box >
                <ReplySection />
            </Box>

        </Box>
    )
}

const useStyles = makeStyles(theme=>createStyles({
        root:(l:LayoutConst)=>({
            display:"flex",
            flexDirection:"column",
            minHeight:`calc(100vh - ${l.MainHeaderSideHeight} - ${theme.size.blogHeaderMenuHeight})`
        })
}))

export default MainSide