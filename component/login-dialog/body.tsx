import {ChangeEvent, useCallback} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core/styles";
import MuiDialogContent from '@material-ui/core/DialogContent';
import TextField from "@material-ui/core/TextField";
import InputBase from "@material-ui/core/InputBase"
import Box from '@material-ui/core/Box'
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export interface Props {
    onChangeId?:(id:string)=>void
    onChangePassword?:(password:string)=>void
    onClickCloseButton?:()=>void
    onClickLoginButton?:()=>Promise<void>
    error?:boolean
}


function LoginBody(props:Props){

    const classes = useStyles()

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

    const onClickCloseButton = useCallback(()=>{
        console.log("close btn click...")
        props.onClickCloseButton?.()
    },[props.onClickCloseButton])

    const onClickLoginButton = useCallback(()=>{
        console.log("login btn click...")
        props.onClickLoginButton?.()
    },[props.onClickLoginButton])



    return (
            <MuiDialogContent >

                <Typography variant="caption">이메일 혹은 전화 번호 </Typography>
                <TextField
                  required
                  fullWidth
                  // label="이메일 혹은 휴대폰 번호"
                  variant="outlined"
                  onChange={onChangeId}
                />

                <Box mt={1} width={"36rem"} />

                <Typography variant="caption">비밀번호</Typography>
                <TextField
                        required
                        fullWidth
                        variant="outlined"
                        type="password"
                        onChange={onChangePassword}
                />

                <Box mt={2.5} width={"36rem"} />

                <Button
                    className={classes.loginButton}
                    fullWidth
                    variant="outlined"
                    onClick={onClickLoginButton}
                >
                    로그인
                </Button>

                <Box mb={4} width={"36rem"} />
            </MuiDialogContent>
    )
}

const useStyles = makeStyles(theme=>createStyles({
    loginButton:{
        minHeight:'56px'
    }

}))


export default LoginBody