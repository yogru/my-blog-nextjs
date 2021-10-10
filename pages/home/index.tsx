import Box from '@material-ui/core/Box'
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core/styles";

import BlogHeaderMenuContainer from '@/container/blog-header-menu'
import PostCardList from "@/components/organ/post-card-list";

import BlogImageBanner from "@/components/cell/banner";
import useLocalLogin from "@/hooks/useLogin";
import postRepository from "@/repository/PostRepository";
import {GetServerSideProps, GetServerSidePropsContext} from "next";
import {PageResponse} from '@/model/Paging'
import {Post} from "@/model/Post";


interface Props {
    pageResponse?:PageResponse<Post>
}



export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    const pageResponse = await postRepository.search();
    let props:Props = {}
    props.pageResponse ??= pageResponse

    return {
        props,
    }
}



function IndexPage(props:Props){
    const classes = useStyles()
    const isLocalLogin = useLocalLogin() // 되는지 확인 안함..ㅋㅋ
    const posts = props.pageResponse?.contents || []

    return (
        <div className={classes.root} >
            <Box>
                <BlogHeaderMenuContainer className={classes.blogMenuHeader}/>
            </Box>

            <Box>
                <BlogImageBanner />
            </Box>

            <Box >
                <PostCardList posts={posts} />
            </Box>
        </div>
    )
}


const useStyles = makeStyles((theme)=>createStyles({
    root:{
        display:"flex",
        flexDirection:"column",
        minWidth:"100vw",
        minHeight:"100vh",
        backgroundColor:theme.palette.background.section
    },
    blogMenuHeader:{
        minHeight: "4rem"
    }
}))


export default IndexPage
