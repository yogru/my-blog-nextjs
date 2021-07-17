import Box from "@material-ui/core/Box"
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core/styles";


export interface Props {

}

function TocSection(){
    const classes = useStyles()
    return (
        <Box className={classes.root}>
            연재 목록 보여주는 영역. 개발 아직 안함..
        </Box>
    )
}

const useStyles = makeStyles(theme=>createStyles({
    root:{
        height:"12rem",
        backgroundColor:"rgb(90,90,50)"
    }
}))


export default TocSection