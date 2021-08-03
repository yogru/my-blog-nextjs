import react from 'react'
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card"
import CardContent from '@material-ui/core/CardContent';
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar"
import Chip from '@material-ui/core/Chip';


export interface Props {}

function HomePostCard(props:Props){
    const classes = useStyles()
    const tags = ["tag1","tag2","tag3"]

    return (
        <Card className={classes.root} elevation={0} >
            <CardContent>
                <Box className={classes.cardContentBox}>
                    <Box className={classes.cardContentHead} mb={0.5}  >
                        <Typography>헤드영역</Typography>
                    </Box>

                    <Box className={classes.cardContentBody} mt={1} bgcolor={"green"}>
                        <Box display="flex">
                            <Box display="flex" flexDirection={"column"} mr={"auto"}>
                                <Box bgcolor={"gray"} mb={3}>
                                    <Typography variant={"h4"}>제목 영역</Typography>
                                </Box>
                            </Box>
                            <Box mr={2} mt={1.5}>
                               <Box display={"flex"}>
                                   <Box mt={1} mr={1.5}>
                                       <Typography>이름 영역</Typography>
                                   </Box>
                                   <Box>
                                       <Avatar  />
                                   </Box>
                               </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box className={classes.cardContentFooter} mt={1} mb={2} bgcolor={"yellow"}>
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
    cardContentBox:{
        display:"flex",
        flexDirection:"column",
    },
    cardContentItem:{
        minHeight:"3rem"
    },
    cardContentHead:{
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

});

export default HomePostCard

//
// import Chip from '@material-ui/core/Chip';
// import Box from '@material-ui/core/Box'
// import makeStyles from "@material-ui/core/styles/makeStyles";
// import theme from "@/styles/theme";
// import {createStyles} from "@material-ui/core/styles";
//
// export interface Props {
//     labels: string []
// }
//
//
// function TagChip(props:Props){
//     const classes = useStyles()
//     return (
//         <Box className={classes.root}>
//             {
//                 props.labels.map((label,idx)=>
//                     <Chip key={idx} className={classes.chip} label={"# "+label} variant={"outlined"} />
//                 )
//             }
//         </Box>
//     )
// }
//
// const useStyles = makeStyles((theme)=>createStyles({
//     root:{
//         textAlign:"center",
//         marginTop:'0.5rem'
//     },
//     chip:{
//         marginLeft:"0.3rem"
//     }
// }))
//
//
//
// export default TagChip