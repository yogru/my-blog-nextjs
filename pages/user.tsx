import Box from '@material-ui/core/Box'
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core/styles";


import ProfileAvatar from "@/components/cell/profile-avatar";
import LabelInput from "@/components/cell/label-input";

export interface Props {

}


export default function User(props:Props){
    const classes = useStyles()
    return (
        <Box className={classes.root}>
           <ProfileAvatar size={"big"} />
            <LabelInput label={"닉네임111"}  defaultValue={"병신"} />
        </Box>
    )

}





const useStyles = makeStyles((theme=>createStyles({
    root:{
        backGroundColor:theme.palette.background.paper
    }
})))

