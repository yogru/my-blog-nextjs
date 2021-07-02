import {useEffect, useCallback} from "react";
import Box from '@material-ui/core/Box'
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core/styles";
import {observer} from 'mobx-react'

import Quill from '@/component/editor/quill'
import PostStore from "@/mobx-store/PostStore";
import PostRepository from "@/repository/PostRepository";

export interface Props {}

const OQuill = observer(Quill)

function EditPost(props:Props){
    const classes = useStyles()
    const onSave = useCallback( async (title:string, body:string)=>{
            await PostStore.submit(title,body)
    },[])




    useEffect(()=>{
        PostRepository.test().catch(e=>console.log(e))
    },[])

    return (
        <Box className={classes.root}>
            <OQuill onSave={onSave} />
        </Box>
    )
}

const useStyles = makeStyles((theme=>createStyles({
    root:{
        backGroundColor:theme.palette.background.paper
    }
})))

export default EditPost