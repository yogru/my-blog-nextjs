import {observer} from 'mobx-react'

import MenuHeader from '@/components/tissue/menu-header'
import {useRootStore} from "@/mobx-store/RootStore";
import {useCallback, useEffect} from "react";


export interface Props {
    className?:string
}

const OMenuHeader = observer((props:Props)=>{
    const rootStore= useRootStore()
    const userStore = rootStore.getUserStore()

    const onAttemptLogin = useCallback(async(email:string,password:string)=>{
        return userStore.attemptLogin({email,password})
    },[])

    const onAttemptLogout = useCallback(()=>{
        userStore.attemptLogout()
    },[])

    return (
        <MenuHeader
            className={props.className}
            isLogin={userStore.isLoginUser()}
            onAttemptLogout={onAttemptLogout}
            onAttemptLogin={onAttemptLogin}
        />
    )
})


export default OMenuHeader


// function BlogHeaderMenuContainer(props:Props){
//     const rootStore= useRootStore()
//     const userStore = rootStore.getUserStore()
//
//     const onAttemptLogin = useCallback(async(email:string,password:string)=>{
//         return userStore.attemptLogin({email,password})
//     },[])
//
//     const onAttemptLogout = useCallback(()=>{
//         userStore.attemptLogout()
//     },[])
//
//     return (
//         <OMenuHeader
//             className={props.className}
//             isLogin={userStore.isLoginUser()}
//             onAttemptLogout={onAttemptLogout}
//             onAttemptLogin={onAttemptLogin}
//         />
//     )
// }
//
// export default observer(BlogHeaderMenuContainer)