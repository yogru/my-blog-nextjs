import Box from '@material-ui/core/Box'
import makeStyles from '@material-ui/core/styles/makeStyles'

import HomePostCard from "@/component/home-post-card";

export interface Props {

}


// 무한 스크롤 어떻게 구현하지.. 걱정되네.. 그냥 페이징으로 일단 만들까?
// 무한 스크롤에 물리면 시간 엄청 오래 걸릴 수도 있을것 같은데.. 흠...

function HomePostCardList(props:Props){
    const classes = useStyles()

    return (
        <div className={classes.bodyRoot} >
            <Box className={classes.bodyItem}>
                <HomePostCard />
            </Box>

            <Box className={classes.bodyItem}>
                <HomePostCard />
            </Box>
        </div>
    )
}


const useStyles = makeStyles((theme)=>({
    bodyRoot:{
        color:theme.palette.primary.main,
        display: 'flex',
        flexWrap:"wrap",
        padding:"1rem",
        flexDirection:"column",
        backgroundColor:theme.palette.background.section
    },
    bodyItem:{
        margin:"1rem",
        minWidth:"24rem", // 전체적인 크기 조율을 해야 할듯?
        maxHeight:"20rem"
    }
}))


export default HomePostCardList