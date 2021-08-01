import Box from '@material-ui/core/Box'
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core/styles";
import Chip from '@material-ui/core/Chip'
import Avatar from "@material-ui/core/Avatar";
import cx from 'classnames'


import DateWrapperImp from "@/modules/DateWrapper";
import PostEditor from "@/model/PostEditor";



export interface Props {
   user:PostEditor
   createDate:string
}

function WriterChip(props:Props){
    const classes = useStyles()
    const dataWrapper = new DateWrapperImp(props.createDate)

    const createAt = new Date(props.createDate).toLocaleString()
    // 아바타 url 관련 관리 해줘야하겠네..
    return(
        <Box className={classes.root }>
            <Chip className={cx(classes.outlined, classes.label)}
                  avatar={<Avatar>영복</Avatar>}
                  label={props.user.nickName +" "+dataWrapper.getDateString("yy/MM/dd")+" 작성" } variant={"outlined"} />
        </Box>
    )
}


const useStyles= makeStyles((theme)=>createStyles({
    root:{
        textAlign:"center",
        marginTop:'0.5rem'
    },
    chip:{
        marginLeft:"0.3rem"
    },
    outlined:{
        border:"none"
    },
    label:{
        fontWeight:500
    }
}))



export default WriterChip
