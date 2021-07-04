import {useEffect, useCallback, useState} from "react";
import Box from '@material-ui/core/Box'
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core/styles";
import {observer} from 'mobx-react'
import { useRouter } from 'next/router'

import Quill from '@/component/editor/quill'
import {useRootStore} from "@/mobx-store/RootStore";
// import PostStore from "@/mobx-store/PostStore";
// import PostRepository from "@/repository/PostRepository";

export interface Props {}

const OQuill = observer(Quill)

function EditPost(props:Props){
    const classes = useStyles()
    const router = useRouter()
    const rootStore = useRootStore()
    const postStore = rootStore.getPostStore()
    const userStore =  rootStore.getUserStore()
    const [loading,setLoading] = useState<boolean>(true)

    useEffect(()=>{
        // useLogin 승격할 필요가 있다..
        userStore.loadLocalStorage()
        if(!userStore.isLoginUser()){
            router.push('/')
        }else{
            setLoading(false)
        }
    },[])

    const onSave = useCallback( async (title:string, body:string)=>{
            await postStore.submit(title,body)
    },[])

    const onBack = useCallback(()=>{
        router.back()
    },[])

    return (
        <>
            {
                loading ? <p> loading...</p> :
                    <Box className={classes.root}>
                        <OQuill onSave={onSave} onBack={onBack} />
                    </Box>
            }
        </>
    )
}

const useStyles = makeStyles((theme=>createStyles({
    root:{
        backGroundColor:theme.palette.background.paper
    }
})))

export default observer(EditPost)