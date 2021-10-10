import {ChangeEvent, useCallback, useState} from "react"
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import MuiDialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";


interface DialogTitleProps {
    onClose?:()=>void
    titleText?:string
}

const useDialogTitleStyles = makeStyles(theme=>createStyles({
    root:{},
    title:{
        marginTop:"2rem",
        fontWeight:500,
        textAlign:"center"
    },
    closeButton:{
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    }
}))

function DialogTitle(props:DialogTitleProps){
    const classes = useDialogTitleStyles()
    const titleText = props.titleText || "환영합니다"
    return (
        <MuiDialogTitle>
            <Typography className={classes.title} variant="h4">{titleText}</Typography>

            {props.onClose ? (
                <IconButton aria-label="close"
                            className={classes.closeButton}
                            onClick={props.onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export interface DialogBodyProps {
    onChangeId?:(id:string)=>void
    onChangePassword?:(password:string)=>void
    onClickCloseButton?:()=>void
    onClickLoginButton?:()=>Promise<void>
    error?:boolean
}

const useDialogBodyStyles = makeStyles(theme=>createStyles({
    loginButton:{
        minHeight:'56px'
    }
}))

function DialogBody(props:DialogBodyProps){
    const classes = useDialogBodyStyles()

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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


export interface LoginDialogProps {
    open?:boolean
    onLogin?:(id:string, password:string)=>Promise<boolean>
    onClose?:()=>void
}


export default function LoginComponent(props:LoginDialogProps){
    const [id, setId] = useState<string>()
    const [password, setPassword] = useState<string>()

    const onChangeId = useCallback((id:string)=>{
        setId(id)
    },[])

    const onChangePassword = useCallback((password:string)=>{
        setPassword(password)
    },[])

    const onClickLoginBtn = useCallback(async ()=>{
        const success = await props.onLogin?.(id,password)
        success && props.onClose?.()
    },[id,password])

    const onClickCloseBtn = useCallback(()=>{
        props.onClose?.()
    },[])


    return (
        <Dialog open={props.open} onClose={onClickCloseBtn}>
            <DialogTitle />
            <DialogBody
                onChangeId={onChangeId}
                onChangePassword={onChangePassword}
                onClickLoginButton={onClickLoginBtn}
            />
            {/*<LoginFooter*/}
            {/*    onClickLoginButton={onClickLoginBtn}*/}
            {/*    onClickCloseButton={onClickCloseBtn}*/}
            {/*/>*/}
        </Dialog>
    )
}