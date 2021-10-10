import {observer} from 'mobx-react'

import PostView from '@/components/tissue/post-view'
import {Post} from "@/model/Post";


export interface Props {
    post:Post
}


const OPostView = observer((props:Props)=>{
    return (
        <PostView post={props.post} />
    )
})


export default OPostView