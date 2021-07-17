import PostViewComponent from '@/component/post-view'
import PostModel from "@/model/PostModel";


export interface Props {
  post:PostModel
}

function PostView(props:Props){
    return (
        <PostViewComponent post={props.post} />
    )
}

export default PostView