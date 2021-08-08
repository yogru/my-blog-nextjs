import Box from '@material-ui/core/Box'
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

import GithubIcon from "@/component/icon/github-icon"
import HomeLogoIcon from "@/component/icon/logo-icon"
import MessageIcon from "@/component/icon/message-icon"
import UserModel from "@/model/UserModel";

type IntroduceIcon = "home" | "github" | "message"


export interface Props {
   user?:UserModel
   onClickIcon?:(typeIcon:IntroduceIcon)=>void
}


function UserIntroducer(props:Props){
    const classes = useStyles()

    return (
        <Box className={classes.root}>
            <Box className={classes.firstSection}>
               <Avatar className={classes.avatar}  />
                <Box className={classes.textSection}>
                    <Box className={classes.textSectionFirst}>
                        <Typography variant={"h5"}>{props.user?.nickName}</Typography>
                    </Box>

                    <Box className={classes.textSectionSecond}>
                        <Typography variant="subtitle1">{props.user?.selfIntroductions}</Typography>
                    </Box>
                </Box>
            </Box>

            <Box display={"flex"}>
                <HomeLogoIcon color={"gray"}
                              onClick={()=>props.onClickIcon?.("home")} />
                <MessageIcon onClick={()=>props.onClickIcon?.("message")}/>
                <GithubIcon onClick={()=>props.onClickIcon?.("github")} />
            </Box>

        </Box>
    )
}


const useStyles = makeStyles(theme=>createStyles({
    root:{
        display:"flex",
        flexDirection:"column"
    },
    firstSection:{
        borderRadius:"0px",
        padding:"1rem",
        display:"flex",
        borderBottom:`1px solid ${theme.borderColor.section}`,
    },
    avatar:{
        width:"8rem",
        height:"8rem",

    },
    textSection:{
        display:"flex",
        flexDirection:"column",
        marginLeft:"1rem",
        marginTop:"auto",
        marginBottom:"auto",

    },
    textSectionFirst:{
        marginBottom:"0.25rem",
        fontWeight:700
    },
    textSectionSecond:{
        fontWeight:400
    }
}))


export default  UserIntroducer