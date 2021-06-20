import Box from '@material-ui/core/Box'
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core/styles";

import Quill from '@/component/editor/quill'
import PostStore from "@/mobx-store/PostStore";
import PostRepository from "@/repository/PostRepository";
import {useEffect} from "react";

export interface Props {}

function EditPost(props:Props){
    const classes = useStyles()
    console.log("hay...")

    useEffect(()=>{
        PostRepository.test().catch(e=>console.log(e))
    },[])

    return (
        <Box className={classes.root}>
            <Quill />
        </Box>
    )
}

const useStyles = makeStyles((theme=>createStyles({
    root:{
        backGroundColor:theme.palette.background.paper
    }
})))

export default EditPost