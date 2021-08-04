import react from 'react'
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card"
import CardContent from '@material-ui/core/CardContent';
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar"
import Chip from '@material-ui/core/Chip';


export interface Props {
}




export interface CardContentBodyProps {
    title?:string
    userName?:string
    profileImgSrc?:string
}

function CardContentBody(props:CardContentBodyProps){
    const classes = useStyles()

    return (
        <Box display="flex" maxWidth="100vw"
             // bgcolor={"gray"}
             overflow={"hidden"} >
            <Box  mb={3} width="80vw"
                 // bgcolor={"yellow"}
            >
                <Typography className={classes.textEllipsis} variant={"h4"}>
                    제목 111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                </Typography>
            </Box>

            <Box ml={"auto"} display={"flex"} mr={3}>
                <Box mt={1} mr={1.5}>
                    <Typography>이름 영역</Typography>
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
    const tags = ["tag1","tag2","tag3"]

    return (
        <Card className={classes.root} elevation={0}  >
            <CardContent className={classes.cardContent} >
                <Box className={classes.cardContentBox}>
                    <Box className={classes.cardContentHead} mb={0.5}  >
                        <Typography>헤드영역</Typography>
                    </Box>

                    <Box className={classes.cardContentBody} mt={1} >
                        <CardContentBody />
                    </Box>

                    <Box className={classes.cardContentFooter} mb={1} >
                        {
                            tags.map((t, idx) =>
                                <Chip className={classes.tagChip} key={idx} label={"# " + t} variant={"outlined"}/>)
                        }
                   </Box>

                </Box>
            </CardContent>
        </Card>
    )
}

const useStyles = makeStyles({
    root: {
        width:"100%",
        borderRadius:'0px',
        borderBottom:"1px solid #d6d6d6"
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
});

export default HomePostCard

