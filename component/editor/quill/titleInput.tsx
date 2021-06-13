import TextField from "@material-ui/core/TextField";
import Box from '@material-ui/core/Box'
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core/styles";

export interface Props {


}


function TitleInput(props:Props){
    const classes = useStyles()

    return (
        <Box className={classes.root}>
            {/*<TextField*/}
            {/*    id="standard-required"*/}
            {/*    className = {classes.input}*/}
            {/*    size={"medium"}*/}
            {/*    required multiline*/}
            {/*    placeholder="제목을 입력 해주세요" />*/}

            <textarea className = {classes.input} placeholder='제목을 입력 해주세요' />
        </Box>

    )

}

const useStyles = makeStyles(theme=>createStyles({
    root:{
        backgroundColor:theme.palette.background.paper,
    },
    input:{
        width:'100%',
        border:"none",
        resize:"none",
        outline:"none",
        fontSize:'1.5rem'
    }
}))


export default TitleInput
