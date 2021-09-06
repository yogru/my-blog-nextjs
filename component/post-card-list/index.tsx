import Box from '@material-ui/core/Box'
import makeStyles from '@material-ui/core/styles/makeStyles'

import HomePostCard from "@/component/post-card";
import PostSummaryModel from "@/model/PostSummaryModel";
import PostEditor from "@/model/PostEditor";
import useEndScroll from '@/hooks/useEndScroll'
import PostModel from "@/model/PostModel";

export interface Props {
    posts: PostModel []
    onEndScroll?:()=>Promise<void>
    onClickPostCard?:(id:number)=>Promise<void>
}


// 무한 스크롤 어떻게 구현하지.. 걱정되네.. 그냥 페이징으로 일단 만들까?
// 무한 스크롤에 물리면 시간 엄청 오래 걸릴 수도 있을것 같은데.. 흠...

function HomePostCardList(props:Props){
     const classes = useStyles()

     const modelList = props.posts || []
    /**
     *  데이터 없을 때 처리 해야 된다. 빈화면 띄우기.. 귀찮으니까 지금은 패스..
     */

    useEndScroll(async ()=>{
        console.log("end............... 스크롤 ")
        await props.onEndScroll?.()
    })

    return (
        <div className={classes.bodyRoot} >
            {
                modelList.map((post,idx)=>
                    <Box key={idx} className={classes.bodyItem}>
                        <HomePostCard onClickTitle={async (e)=>{
                            props.onClickPostCard?.(e)}} post={post} />
                    </Box>
                )
            }

        </div>
    )
}


const useStyles = makeStyles((theme)=>({
    bodyRoot:{
        color:theme.palette.primary.main,
        display: 'flex',
        flexWrap:"wrap",
        flexDirection:"column",
        backgroundColor:theme.palette.background.default,
        padding:' 1rem 2rem'
    },
    bodyItem:{
        marginBottom:"1.5rem",
        minWidth:"24rem", // 전체적인 크기 조율을 해야 할듯?
        maxHeight:"20rem"
    }
}))


export default HomePostCardList