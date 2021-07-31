import TextField from "@material-ui/core/TextField";
import Box from '@material-ui/core/Box'
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core/styles";
import {ChangeEvent, useCallback} from "react";

export interface Props {
    onChangeTitle?: (string)=>void
}


function TitleInput(props:Props){
    const classes = useStyles()

    const onChangeTextArea = useCallback((e:ChangeEvent<HTMLTextAreaElement>)=>{
        e.preventDefault()
        props.onChangeTitle?.(e.target.value)
    },[props.onChangeTitle])

    return (
        <Box className={classes.root}>
            <TextField fullWidth id="outlined-basic" label="제목" variant="outlined"
                       onChange={ onChangeTextArea }
                       placeholder="제목을 입력 해주세요" />
        </Box>

    )

}

const useStyles = makeStyles(theme=>createStyles({
    root:{
        // backgroundColor:theme.palette.background.paper,
        marginTop:"5rem",
        paddingLeft:"2rem",
        paddingRight:"2rem",
        paddingTop:'1rem',

    }
}))


export default TitleInput
