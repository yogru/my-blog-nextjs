import Box from "@material-ui/core/Box"
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core/styles";

import TocSection from './toc-section'
import ContentsSection from "./contents-section";
import FooterSection from "./footer-section";
import layoutValue, {Layout} from "@/component/post-view/layout";
import PostModel from "@/model/PostModel";

export interface Props {
    post:PostModel
    layoutConst:Layout
}


function MainSide(props:Props){
    const classes = useStyles(props.layoutConst)

    return (
        <Box className={classes.root}>
            {/*<Box>*/}
            {/*    <TocSection/>*/}
            {/*</Box>*/}

            <Box>
                <ContentsSection contents={props.post.body} />
            </Box>

            <Box mt="auto">
                <FooterSection />
            </Box>

        </Box>
    )
}

const useStyles = makeStyles(theme=>createStyles({
        root:(l:Layout)=>({
            display:"flex",
            flexDirection:"column",
            backgroundColor:theme.palette.background.paper,
            minHeight:`calc(100vh - ${l.mainHeaderSideHeight.get()} - ${theme.size.blogHeaderMenuHeight})`
        })
}))

export default MainSide