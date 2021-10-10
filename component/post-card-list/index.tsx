import Box from '@material-ui/core/Box'
import makeStyles from '@material-ui/core/styles/makeStyles'

import HomePostCard from "@/component/post-card";
import useEndScroll from '@/hooks/useEndScroll'
import {Post} from "@/model/Post"

export interface Props {
    posts: Post []
    onEndScroll?:()=>Promise<void>
    onClickPostCard?:(id:number)=>Promise<void>
}

function HomePostCardList(props:Props){
     const classes = useStyles()

     const modelList = props.posts || []

    /**
     *  데이터 없을 때 처리 해야 된다. 빈화면 띄우기.. 귀찮으니까 지금은 패스..
     */

    useEndScroll(async ()=>{
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