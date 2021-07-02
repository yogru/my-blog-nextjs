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
            {/*<TextField*/}
            {/*    id="standard-required"*/}
            {/*    className = {classes.input}*/}
            {/*    size={"medium"}*/}
            {/*    required multiline*/}
            {/*    placeholder="제목을 입력 해주세요" />*/}

            <textarea className = {classes.input} placeholder='제목을 입력 해주세요' onChange={ onChangeTextArea } />

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
