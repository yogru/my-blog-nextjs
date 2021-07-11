import {useRootStore} from "@/mobx-store/RootStore";
import {useEffect} from "react";


export default function useLocalLogin(){
    const rootStore = useRootStore()
    const userStore = rootStore.getUserStore()
    useEffect(()=>{
        userStore.loadLocalStorage()
    },[])
    return userStore.isLoginUser()
}