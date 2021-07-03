import {useCallback, useState} from "react"
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";

import LoginTitle from "./title"
import LoginBody from "./body"
import LoginFooter from './footer'

export interface Props {
    open?:boolean
    onLogin?:(id:string, password:string)=>Promise<void>
    onClose?:()=>void
}


function LoginComponent(props:Props){
    const classes = useStyles()
    const [id, setId] = useState<string>()
    const [password, setPassword] = useState<string>()

    const onChangeId = useCallback((id:string)=>{
        setId(id)
    },[])

    const onChangePassword = useCallback((password:string)=>{
        setPassword(password)
    },[])

    const onClickLoginBtn = useCallback(async ()=>{
       await props.onLogin?.(id,password)
        // props.onClose?.()
    },[id,password])

    const onClickCloseBtn = useCallback(()=>{
        props.onClose?.()
    },[])


    return (
        <Dialog open={props.open}>
            <LoginTitle />
            <LoginBody
                onChangeId={onChangeId}
                onChangePassword={onChangePassword}
            />
            <LoginFooter
                onClickLoginButton={onClickLoginBtn}
                onClickCloseButton={onClickCloseBtn}
            />
        </Dialog>
    )

}

const useStyles = makeStyles(theme=>createStyles({
    root:{}
}))

export default LoginComponent