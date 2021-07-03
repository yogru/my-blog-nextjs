import {useCallback} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core/styles";
import MuiDialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

export interface Props {
    onClickCloseButton?:()=>void
    onClickLoginButton?:()=>Promise<void>
}


function LoginFooter(props:Props){

    const onClickCloseButton = useCallback(()=>{
        console.log("close btn click...")
        props.onClickCloseButton?.()
    },[props.onClickCloseButton])

    const onClickLoginButton = useCallback(()=>{
        console.log("login btn click...")
        props.onClickLoginButton?.()
    },[props.onClickLoginButton])

    return (
        <MuiDialogActions>
            <Button autoFocus onClick={onClickCloseButton} color="primary">
                취소
            </Button>
            <Button autoFocus onClick={onClickLoginButton} color="primary">
               로그인
            </Button>
        </MuiDialogActions>
    )
}


const useStyles = makeStyles(theme=>createStyles({}))


export default LoginFooter