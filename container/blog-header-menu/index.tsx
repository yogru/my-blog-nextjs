import {observer} from 'mobx-react'

import BlogHeaderMenuComponent from '@/component/blog-header-menu'
import {useRootStore} from "@/mobx-store/RootStore";
import {useCallback, useEffect} from "react";

const OBlogHeaderMenuComponent = observer(BlogHeaderMenuComponent)

export interface Props {
    className?:string
}

function BlogHeaderMenuContainer(props:Props){
    const rootStore= useRootStore()
    const userStore = rootStore.getUserStore()
    console.log(userStore)

    const onAttemptLogin = useCallback(async(email:string,password:string)=>{
       return userStore.attemptLogin({email,password})
    },[])

    const onAttemptLogout = useCallback(()=>{
        userStore.attemptLogout()
    },[])

    return (
         <OBlogHeaderMenuComponent
             className={props.className}
              isLogin={userStore.isLoginUser()}
              onAttemptLogout={onAttemptLogout}
              onAttemptLogin={onAttemptLogin}
         />
    )
}

export default observer(BlogHeaderMenuContainer)