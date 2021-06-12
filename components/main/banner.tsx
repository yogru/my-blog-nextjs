import Box from '@material-ui/core/Box'
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core/styles";

export interface Props{}

function MainBanner(){
    const classes = useStyles()

    return (
        <Box>
            <img
                className={classes.img}
                src = '/images/banner.jpg' />
        </Box>
    )
}

const useStyles = makeStyles((theme=>createStyles({
    img:{
        width:"100%"
    }
})))

export default MainBanner