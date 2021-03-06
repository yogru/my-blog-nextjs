import Box from '@material-ui/core/Box'
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core/styles";

import UserSetting from "@/components/organ/user-setting";

export interface Props {

}


export default function User(props:Props){
    const classes = useStyles()
    return (
        <Box className={classes.root}>
            <UserSetting />
        </Box>
    )

}





const useStyles = makeStyles((theme=>createStyles({
    root:{
        backGroundColor:theme.palette.background.paper
    }
})))

