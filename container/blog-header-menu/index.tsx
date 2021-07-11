import {observer} from 'mobx-react'

import BlogHeaderMenuComponent from '@/component/blog-header-menu'
import {useRootStore} from "@/mobx-store/RootStore";
import {useCallback, useEffect} from "react";

const OBlogHeaderMenuComponent = observer(BlogHeaderMenuComponent)

function BlogHeaderMenuContainer(){
    const rootStore= useRootStore()
    const userStore = rootStore.getUserStore()

    const onAttemptLogin = useCallback(async(email:string,password:string)=>{
       return userStore.attemptLogin({email,password})
    },[])

    const onAttemptLogout = useCallback(()=>{
        userStore.attemptLogout()
    },[])

    return (
         <OBlogHeaderMenuComponent
              isLogin={userStore.isLoginUser()}
              onAttemptLogout={onAttemptLogout}
              onAttemptLogin={onAttemptLogin}
         />
    )
}

export default observer(BlogHeaderMenuContainer)