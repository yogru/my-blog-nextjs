import {ChangeEvent, useCallback} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core/styles";
import MuiDialogContent from '@material-ui/core/DialogContent';
import TextField from "@material-ui/core/TextField";


export interface Props {
    onChangeId?:(id:string)=>void
    onChangePassword?:(password:string)=>void
    error?:boolean
}


function LoginBody(props:Props){

    const onChangeId = useCallback(
        (e:ChangeEvent<HTMLInputElement>)=>{
            e.preventDefault()
            props.onChangeId?.(e.target.value)
        },
        [props.onChangeId])

    const onChangePassword = useCallback((e:ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault()
        props.onChangePassword?.(e.target.value)
    },[props.onChangePassword])


    return (
        <MuiDialogContent dividers>
            <TextField
              required
              label="id"
              variant="outlined"
              onChange={onChangeId}
            />

            <TextField
                required
                label="password"
                type="password"
                variant="outlined"
                onChange={onChangePassword}
            />
        </MuiDialogContent>
    )
}

const useStyles = makeStyles(theme=>createStyles({
    root:{}
}))


export default LoginBody