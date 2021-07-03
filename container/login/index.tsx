import LoginComponent from "@/component/login";
import {observer} from "mobx-react";
import {useRootStore} from "@/mobx-store/RootStore";
import {useCallback} from "react";

// 삭제해야함... 테스트용..
import Fetcher from "@/modules/Fetcher";

const OLoginComponent = observer(LoginComponent)

export interface Props {
   open?:boolean
}


function LoginContainer(props:Props){
    const rootStore = useRootStore()
    const userStore = rootStore.getUserStore()

    const onLogin = useCallback(async (email:string, password:string)=>{
        console.log("일단 시도는 되니??",email,password)
        await userStore.attemptLogin({email,password})
    },[])

    const onClose = useCallback(()=>{
        Fetcher.get("http://127.0.0.1:8080/users/hello", {})
    },[])

    return (
        <OLoginComponent open={props.open} onLogin={onLogin}
            onClose={onClose}
        />
    )
}


export default LoginContainer