import Box from '@material-ui/core/Box'
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core/styles";
import {useEffect} from "react";

import BlogHeaderMenuContainer from '@/container/blog-header-menu'
import HomeBody from '@/container/home-body'
import BlogImageBanner from "@/component/banner/banner";
import {useRootStore} from "@/mobx-store/RootStore";
import useLocalLogin from "@/hooks/useLogin";


function IndexPage(){
    const classes = useStyles()
    const isLocalLogin = useLocalLogin() // 되는지 확인 안함..ㅋㅋ
    console.log(isLocalLogin)
    return (
        <div className={classes.root} >
            <Box>
                <BlogHeaderMenuContainer className={classes.blogMenuHeader}/>
            </Box>

            <Box>
                <BlogImageBanner />
            </Box>

            <Box >
                <HomeBody  />
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
