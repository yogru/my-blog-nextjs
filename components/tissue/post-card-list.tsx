import {useCallback} from 'react'
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar"
import Chip from '@material-ui/core/Chip';
import {createStyles} from "@material-ui/core/styles";

import {Post} from "@/model/Post";
import useEndScroll from '@/hooks/useEndScroll'

interface PostCardBodyProps{
    title:string
    userName:string
    onClickTitle:()=>Promise<void>
    profileImgSrc?:string
}

const useCardBodyStyles = makeStyles(theme=>createStyles({
    hoverClick:{
        "&:hover":{
            cursor:"pointer"
        }
    },
    textEllipsis:{
        width:"100%",
        minWidth:"24rem",
        overflow:"hidden",
        textOverflow:"ellipsis",
        whiteSpace:"nowrap"
    }
}));

function CardBody(props:PostCardBodyProps){
    const classes = useCardBodyStyles()
    const onClickTitle = useCallback(async (e)=>{
        e.stopPropagation()
        await props.onClickTitle()
    },[])

    return (
        <Box display="flex" maxWidth="100vw" overflow={"hidden"} >
            <Box  mb={3} width="80vw" className={classes.hoverClick} onClick={onClickTitle}>
                <Typography className={classes.textEllipsis} variant={"h4"}>
                    {props.title}
                </Typography>
            </Box>

            <Box ml={"auto"} display={"flex"} mr={3}>
                <Box mt={1} mr={1.5}>
                    <Typography>{props.userName}</Typography>
                </Box>
                <Box>
                    <Avatar  />
                </Box>
            </Box>
        </Box>
    )
}

////////////////////////////////////////////////////////////////////////////////////////////////

interface  PostCardProps {
    post:Post
    onClickTitle?:(postId:number)=>Promise<void>
}

const usePostCardStyles = makeStyles(theme=>createStyles({
    root: {
        width:"100%",
        borderRadius:'0px',
        borderBottom:`1px solid ${theme.borderColor.section}`
    },
    cardContent:{
        width:"100%",
    },
    cardContentBox:{
        width:"100%",
        display:"flex",
        flexDirection:"column",
    },
    cardContentItem:{
        minHeight:"3rem"
    },
    cardContentHead:{
        width:"100%",
        // textAlign:"left",
        color:"#ff540f",
        fontWeight:700,
        minHeight:"2rem",
        maxHeight:"2rem"
    },
    cardContentBody:{

        // minHeight:"4rem"
    },
    cardContentFooter:{
        // textAlign:"center",
        minHeight:"2rem"
    },
    tagChip:{
        marginRight:"4px"
    }
}));

function PostCard(props:PostCardProps){
    const classes = usePostCardStyles()
    const post = props.post
    const tags = post.tags
    const { title , editor } = post

    const onClickTitle = useCallback(async ()=>{
        await props.onClickTitle?.(post.id)
    },[])

    return (
        <Box className={classes.root}  >
            <Box className={classes.cardContent} >
                <Box className={classes.cardContentBox}>
                    <Box className={classes.cardContentHead} mb={0.5}  >
                        <Typography>{tags[0]}</Typography>
                    </Box>

                    <Box className={classes.cardContentBody} mt={1} >
                        <CardBody title={title} userName={editor.nickName} onClickTitle={onClickTitle} />
                    </Box>

                    <Box className={classes.cardContentFooter} mb={2} >
                        {
                            tags.map((t, idx) =>
                                <Chip className={classes.tagChip} key={idx} label={"# " + t} variant={"outlined"}/>)
                        }
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export interface PostCardListProps {
    posts: Post []
    onEndScroll?:()=>Promise<void>
    onClickPostCard?:(id:number)=>Promise<void>
}

const useCardListStyles = makeStyles((theme)=>({
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


export default function PostCardList(props:PostCardListProps){
    const classes = useCardListStyles()
    const modelList = props.posts || []

    useEndScroll(async ()=>{
        await props.onEndScroll?.()
    })

    return (
        <div className={classes.bodyRoot} >
            {
                modelList.map((post,idx)=>
                    <Box key={idx} className={classes.bodyItem}>
                        <PostCard onClickTitle={async (e)=>{
                            props.onClickPostCard?.(e)}} post={post} />
                    </Box>
                )
            }
        </div>
    )
}