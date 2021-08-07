import react, {useCallback} from 'react'
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card"
import CardContent from '@material-ui/core/CardContent';
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar"
import Chip from '@material-ui/core/Chip';
import PostSummaryModel from "@/model/PostSummaryModel";
import {createStyles} from "@material-ui/core/styles";



export interface Props {
    postSummaryModel:PostSummaryModel
    onClickTitle?:(postId:number)=>Promise<void>
}


export interface CardContentBodyProps {
    title:string
    userName:string
    onClickTitle:()=>Promise<void>
    profileImgSrc?:string //짜증나네 이거. 유저에서 자신의 프로필 사진 주소까지??? 음... 유저 설정 페이지 먼저 만들어야하나?
                          // 그러면 파일 처리도 들어가야하는데. 손 많이 가는데.. 흠...
}

function CardContentBody(props:CardContentBodyProps){
    const classes = useStyles()
    const onClickTitle = useCallback(async (e)=>{
        e.stopPropagation()
        await props.onClickTitle()
    },[])

    return (
        <Box display="flex" maxWidth="100vw"
             overflow={"hidden"} >
            <Box  mb={3} width="80vw" onClick={onClickTitle}>
                <Typography className={classes.textEllipsis} variant={"h4"}>
                    {props.title}                    {props.title}
                    {props.title}
                    {props.title}
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




function HomePostCard(props:Props){
    const classes = useStyles()
    const postSummaryModel = props.postSummaryModel
    const tags = postSummaryModel.tags
    const { title , mainEditor } = postSummaryModel

    const onClickTitle = useCallback(async ()=>{
        await props.onClickTitle(postSummaryModel.postId)
    },[])

    return (
        <Box className={classes.root}  >
            <Box className={classes.cardContent} >
                <Box className={classes.cardContentBox}>
                    <Box className={classes.cardContentHead} mb={0.5}  >
                        <Typography>{tags[0]}</Typography>
                    </Box>

                    <Box className={classes.cardContentBody} mt={1} >
                        <CardContentBody title={title} userName={mainEditor.nickName} onClickTitle={onClickTitle} />
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

const useStyles = makeStyles(theme=>createStyles({
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
    },
    textEllipsis:{
        width:"100%",
        minWidth:"24rem",
        overflow:"hidden",
        textOverflow:"ellipsis",
        whiteSpace:"nowrap"
    }
}));

export default HomePostCard

